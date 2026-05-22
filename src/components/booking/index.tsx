"use client";
import { deleteBookingData, getBookingData } from "@/helper/fetchData";
import { BookingPayload } from "@/types/bookingType";
import { Button, Table } from "@heroui/react";
import { useEffect, useState } from "react";
import { AlertDialog } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const MyBooking = () => {
  const [allBookingData, setAllBookingData] = useState<BookingPayload[]>([]);

  const [token, setToken] = useState("");

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
    if (!token) return;
    const fetchData = async () => {
      console.log("sending token:", token);
      const result = await getBookingData(token);
      if (result?.data) {
        setAllBookingData(result.data);
      }
    };

    fetchData();
  }, [token]);

  const handleDelete = async (id: string) => {
    await deleteBookingData(id, token);
    const result = await getBookingData(token);
    if (result.data) {
      setAllBookingData(result.data);
    }
  };

  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Facility Name</Table.Column>
              <Table.Column>Booking Date</Table.Column>
              <Table.Column>Time Slot</Table.Column>
              <Table.Column>Price</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Delete</Table.Column>
            </Table.Header>
            <Table.Body>
              {allBookingData.length > 0 ? (
                allBookingData.map((booking) => (
                  <Table.Row key={booking._id}>
                    <Table.Cell> {booking.facilityName} </Table.Cell>
                    <Table.Cell>
                      {booking.bookingDate
                        ? new Date(booking.bookingDate).toLocaleDateString()
                        : ""}
                    </Table.Cell>
                    <Table.Cell> {booking.availableTimeSlots} </Table.Cell>

                    <Table.Cell> {booking.pricePerHour} </Table.Cell>
                    <Table.Cell> {booking.status} </Table.Cell>
                    <Table.Cell>
                      <AlertDialog>
                        <Button variant="danger">Cancel Booking</Button>
                        <AlertDialog.Backdrop>
                          <AlertDialog.Container>
                            <AlertDialog.Dialog className="sm:max-w-[400px]">
                              <AlertDialog.CloseTrigger />
                              <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                  Cancel booking permanently?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>
                              <AlertDialog.Body>
                                <p>
                                  This will permanently delete{" "}
                                  <strong>My Awesome Project</strong> and all of
                                  its data. This action cannot be undone.
                                </p>
                              </AlertDialog.Body>
                              <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                  Cancel
                                </Button>
                                <Button
                                  slot="close"
                                  variant="danger"
                                  onClick={() => handleDelete(booking._id!)}
                                >
                                  Cancel booking
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
  );
};

export default MyBooking;
