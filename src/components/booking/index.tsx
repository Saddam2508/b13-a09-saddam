"use client";
import { deleteBookingData, getBookingData } from "@/helper/fetchData";
import { BookingPayload } from "@/types/bookingType";
import { Button, Table } from "@heroui/react";
import { useEffect, useState } from "react";

const MyBooking = () => {
  const [allBookingData, setAllBookingData] = useState<BookingPayload[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBookingData();
      if (result?.data) {
        setAllBookingData(result.data);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteBookingData(id);
    const result = await getBookingData();
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
                      <Button onClick={() => handleDelete(booking._id!)}>
                        Cancel Booking
                      </Button>
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
