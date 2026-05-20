"use client";

import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { TFacility } from "@/types/facilityType";
import { DateValue } from "@internationalized/date";
import { createBookingdData } from "@/helper/fetchData";
import { BookingPayload } from "@/types/bookingType";

const BookingCard = ({ facility }: { facility: TFacility }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [bookingDate, setBookingDate] = useState<DateValue | null>(null);
  const [hours, setHours] = useState<number>(1);

  const { pricePerHour, _id, availableTimeSlots } = facility;

  const handleBooking = async () => {
    const bookingData: BookingPayload = {
      facilityId: _id,
      user_email: user?.email || "",
      bookingDate: bookingDate ? bookingDate.toDate("Asia/Dhaka") : null,
      availableTimeSlots,
      hours,
      pricePerHour,
      status: facility._id ? "pending" : "fulfilled",
    };

    // const {data:tokenData} = await authClient.token()

    const data = await createBookingdData(bookingData);
    toast.success("You booked successfully!");
  };

  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-cyan-500">${pricePerHour}</h2>
      <p className="text-sm text-muted">per person</p>

      <DateField onChange={setBookingDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className={"w-full rounded-none bg-cyan-500"}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
