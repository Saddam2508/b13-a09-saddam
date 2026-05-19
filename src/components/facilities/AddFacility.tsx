"use client";
import { TFacility } from "@/types/facilityType";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Link,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { Table } from "@heroui/react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const AddFacility = () => {
  const facilityData: TFacility = {
    facilityName: "",
    facilityType: "",
    image: "",
    location: "",
    pricePerHour: 0,
    capacity: 0,
    availableTimeSlots: "",
    description: "",
    email: "",
  };

  const [facilities, setFacilities] = useState<TFacility[]>([facilityData]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const allFacilityData = Object.fromEntries(formData.entries());
    const facility = {
      ...allFacilityData,
      availableTimeSlots: `${allFacilityData.startTime} - ${allFacilityData.endTime}`,
    };
    setFacilities((prev) => [...prev, facility as TFacility]);
  };

  return (
    <div className="max-w-7xl mx-auto mt-30">
      <div className="my-2 text-end">
        <Modal>
          <Button variant="secondary">+ Add facility</Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <Envelope className="size-5" />
                  </Modal.Icon>
                  <Modal.Heading>Add Facility</Modal.Heading>
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
                        defaultValue=""
                      >
                        <Label>Facility Name</Label>
                        <Input
                          placeholder="Enter facility name"
                          name="facilityName"
                        />
                      </TextField>
                      <TextField
                        className="w-full"
                        name="facilityType"
                        type="text"
                      >
                        <Label>Facility Type</Label>
                        <Input placeholder="Enter facility type" />
                      </TextField>
                      <TextField className="w-full" name="image" type="url">
                        <Label>Image Upload</Label>
                        <Input placeholder="Enter image url" />
                      </TextField>
                      <TextField className="w-full" name="location" type="text">
                        <Label>Location</Label>
                        <Input placeholder="Enter location name" />
                      </TextField>
                      <TextField className="w-full" name="price" type="number">
                        <Label>Price Per Hour</Label>
                        <Input placeholder="Enter price" />
                      </TextField>
                      <TextField
                        className="w-full"
                        name="capacity"
                        type="number"
                      >
                        <Label>Capacity</Label>
                        <Input placeholder="Enter capacity" />
                      </TextField>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField name="startTime" type="time">
                          <Label>Start Time</Label>
                          <Input />
                        </TextField>

                        <TextField name="endTime" type="time">
                          <Label>End Time</Label>
                          <Input />
                        </TextField>
                      </div>
                      <TextField
                        className="w-full"
                        name="description"
                        type="text"
                      >
                        <Label>Description</Label>
                        <Input placeholder="description" />
                      </TextField>
                      <TextField className="w-full" name="email" type="email">
                        <Label>Owner Email</Label>
                        <Input placeholder="email" />
                      </TextField>
                      <Modal.Footer>
                        <Button slot="close" variant="secondary">
                          Cancel
                        </Button>
                        <Button slot="close" type="submit">
                          Add facility
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
                {facilities.length > 0
                  ? facilities.map((faci, i) => (
                      <Table.Row key={i}>
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
                        <Table.Cell> {faci.description} </Table.Cell>
                        <Table.Cell> {faci.email} </Table.Cell>
                        <Table.Cell>
                          <Link href="/">Edit</Link>
                        </Table.Cell>
                        <Table.Cell>
                          <Link href="/">Delete</Link>
                        </Table.Cell>
                      </Table.Row>
                    ))
                  : ""}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default AddFacility;
