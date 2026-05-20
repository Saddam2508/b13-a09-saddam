"use client";

import { Button, Card, Input, TextField } from "@heroui/react";
import React, { useMemo, useState } from "react";
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
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const { facilityName, pricePerHour, _id, availableTimeSlots } = facility;

  const hours = useMemo(() => {
    if (!startTime || !endTime) return 0;

    const start = new Date(`2025-01-01T${startTime}`);
    const end = new Date(`2025-01-01T${endTime}`);
    const diffHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

    return diffHours > 0 ? diffHours : 0;
  }, [startTime, endTime]);

  const handleBooking = async () => {
    const bookingData: BookingPayload = {
      facilityId: _id,
      facilityName: facilityName || "",
      user_email: user?.email || "",
      bookingDate: bookingDate ? bookingDate.toDate("Asia/Dhaka") : null,
      availableTimeSlots,
      hours,
      pricePerHour,
      status: facility._id ? "pending" : "fulfilled",
    };

    await createBookingdData(bookingData);
    toast.success("You booked successfully!");
  };

  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-cyan-500">{facilityName}</h2>

      <DateField onChange={setBookingDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <p className="text-sm text-muted">{availableTimeSlots}</p>

      <div className="grid grid-cols-2 gap-4">
        <TextField>
          <Label>Start Time</Label>
          <Input
            name="startTime"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </TextField>

        <TextField>
          <Label>End Time</Label>
          <Input
            name="endTime"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </TextField>
      </div>

      <p className="text-sm text-muted">Total Hours: {hours}</p>
      <h2 className="text-2xl font-bold text-cyan-500">${pricePerHour}</h2>

      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-cyan-500"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
