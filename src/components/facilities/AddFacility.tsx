"use client";
import {
  createFacilitiesdData,
  deletefacilitiesdData,
  getfacilitiesdData,
  updatefacilitiesdData,
} from "@/helper/fetchData";
import { AlertDialog } from "@heroui/react";
import { TFacility } from "@/types/facilityType";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Table } from "@heroui/react";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const AddFacility = () => {
  const [facilities, setFacilities] = useState<TFacility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<TFacility | null>(
    null,
  );
  const [open, setOpen] = useState<boolean>(false);

  const [token, setToken] = useState("");

  const { data: session, error } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    const getToken = async () => {
      const { data, error } = await authClient.token();

      if (error) {
        console.log(error);
        return;
      }

      if (data) {
        setToken(data.token);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getfacilitiesdData();
      if (result?.data) {
        setFacilities(result.data);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const allFacilityData = Object.fromEntries(formData.entries());
    const facility = {
      ...allFacilityData,
      availableTimeSlots: `${allFacilityData.startTime} - ${allFacilityData.endTime}`,
    };

    if (selectedFacility?._id) {
      await updatefacilitiesdData(selectedFacility._id, facility, token);
      toast.success("Facility updated successfully");
      setSelectedFacility(null);
    } else {
      await createFacilitiesdData(token, facility as TFacility);
      toast.success("Facility created successfully");
    }
    const result = await getfacilitiesdData();
    if (result.data) {
      setFacilities(result.data);
    }
  };

  const handleDelete = async (id: string) => {
    await deletefacilitiesdData(id, token);
    const result = await getfacilitiesdData();
    toast.success("Facility delete successfully");
    if (result.data) {
      setFacilities(result.data);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-30">
      <div className="my-2 text-end">
        <Modal isOpen={open} onOpenChange={setOpen}>
          <Button
            variant="secondary"
            onPress={() => {
              setSelectedFacility(null);
              setOpen(true);
            }}
          >
            {selectedFacility ? "Update" : " + Add facility"}
          </Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <Envelope className="size-5" />
                  </Modal.Icon>
                  <Modal.Heading>
                    {selectedFacility ? "Update" : " + Add facility"}
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="p-6">
                  <Surface variant="default">
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <TextField
                        className="w-full"
                        name="name"
                        type="text"
                        defaultValue={selectedFacility?.facilityName}
                      >
                        <Label>Facility Name</Label>
                        <Input
                          placeholder="Enter facility name"
                          name="facilityName"
                        />
                      </TextField>
                      <TextField
                        className="w-full"
                        type="text"
                        defaultValue={selectedFacility?.facilityType}
                      >
                        <Label>Facility Type</Label>
                        <Input
                          placeholder="Enter facility type"
                          name="facilityType"
                        />
                      </TextField>
                      <TextField
                        className="w-full"
                        defaultValue={selectedFacility?.image}
                      >
                        <Label>Image Upload</Label>
                        <Input
                          placeholder="Enter image url"
                          name="image"
                          type="url"
                        />
                      </TextField>
                      <TextField
                        className="w-full"
                        name="location"
                        type="text"
                        defaultValue={selectedFacility?.location}
                      >
                        <Label>Location</Label>
                        <Input
                          placeholder="Enter location name"
                          name="location"
                        />
                      </TextField>
                      <TextField
                        className="w-full"
                        defaultValue={selectedFacility?.pricePerHour.toString()}
                      >
                        <Label>Price Per Hour</Label>
                        <Input
                          placeholder="Enter price"
                          name="pricePerHour"
                          type="number"
                        />
                      </TextField>
                      <TextField
                        className="w-full"
                        defaultValue={selectedFacility?.capacity.toString()}
                      >
                        <Label>Capacity</Label>
                        <Input
                          placeholder="Enter capacity"
                          name="capacity"
                          type="number"
                        />
                      </TextField>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField defaultValue="">
                          <Label>Start Time</Label>
                          <Input name="startTime" type="time" />
                        </TextField>

                        <TextField defaultValue="">
                          <Label>End Time</Label>
                          <Input name="endTime" type="time" />
                        </TextField>
                      </div>
                      <TextField
                        className="w-full"
                        defaultValue={selectedFacility?.description}
                      >
                        <Label>Description</Label>
                        <Input
                          placeholder="description"
                          name="description"
                          type="text"
                        />
                      </TextField>
                      <TextField
                        className="w-full "
                        defaultValue={
                          selectedFacility?.email
                            ? selectedFacility.email
                            : user?.email
                              ? user.email
                              : ""
                        }
                      >
                        <Label>Owner Email</Label>
                        <Input placeholder="email" name="email" type="email" />
                      </TextField>
                      <Modal.Footer>
                        <Button
                          slot="close"
                          variant="secondary"
                          onPress={() => {
                            setSelectedFacility(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button slot="close" type="submit">
                          {selectedFacility ? "Update" : " + Add facility"}
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Surface>
                </Modal.Body>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>
      {/* show data */}
      <div>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Facility Name</Table.Column>
                <Table.Column>Facility Type</Table.Column>
                <Table.Column>Image Upload</Table.Column>
                <Table.Column>Location</Table.Column>
                <Table.Column>Price Per Hour</Table.Column>
                <Table.Column>Capacity</Table.Column>
                <Table.Column>Available Time Slots</Table.Column>
                <Table.Column>Description</Table.Column>
                <Table.Column>Owner Email</Table.Column>
                <Table.Column>Edit</Table.Column>
                <Table.Column>Delete</Table.Column>
              </Table.Header>
              <Table.Body>
                {facilities.length > 0 ? (
                  facilities.map((faci) => (
                    <Table.Row key={faci._id}>
                      <Table.Cell> {faci.facilityName} </Table.Cell>
                      <Table.Cell> {faci.facilityType} </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {faci.image && (
                          <Image
                            src={faci.image}
                            alt=""
                            width={50}
                            height={50}
                            unoptimized
                          />
                        )}{" "}
                      </Table.Cell>
                      <Table.Cell> {faci.location} </Table.Cell>
                      <Table.Cell> {faci.pricePerHour} </Table.Cell>
                      <Table.Cell> {faci.capacity} </Table.Cell>
                      <Table.Cell> {faci.availableTimeSlots} </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {faci.description.substring(0, 100)}......{" "}
                      </Table.Cell>
                      <Table.Cell> {faci.email} </Table.Cell>
                      <Table.Cell>
                        <Button
                          onPress={() => {
                            setSelectedFacility(faci);
                            setOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                      </Table.Cell>
                      <Table.Cell>
                        <AlertDialog>
                          <Button variant="danger">Delete facility</Button>
                          <AlertDialog.Backdrop>
                            <AlertDialog.Container>
                              <AlertDialog.Dialog className="sm:max-w-[400px]">
                                <AlertDialog.CloseTrigger />
                                <AlertDialog.Header>
                                  <AlertDialog.Icon status="danger" />
                                  <AlertDialog.Heading>
                                    Delete facility permanently?
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  <p>This will permanently delete facility</p>
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Cancel
                                  </Button>
                                  <Button
                                    slot="close"
                                    variant="danger"
                                    onClick={() => handleDelete(faci._id)}
                                  >
                                    Delete facility
                                  </Button>
                                </AlertDialog.Footer>
                              </AlertDialog.Dialog>
                            </AlertDialog.Container>
                          </AlertDialog.Backdrop>
                        </AlertDialog>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <p>No data found</p>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default AddFacility;
