"use client";

import React, { useEffect, useState } from "react";

import { Button, Card, DateField, Label, TextField } from "@heroui/react";

import toast from "react-hot-toast";

import { DateValue } from "@internationalized/date";

import { authClient } from "@/lib/auth-client";

import { TFacility } from "@/types/facilityType";
import { BookingPayload } from "@/types/bookingType";

import { createBookingData } from "@/helper/fetchData";
import { redirect } from "next/navigation";

const BookingCard = ({ facility }: { facility: TFacility }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const { facilityName, pricePerHour, _id, availableTimeSlots } = facility;
  const [bookingDate, setBookingDate] = useState<DateValue | null>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [availableStart, availableEnd] = availableTimeSlots.split(" - ");

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

  // HH:mm -> total minutes
  const convertTimeToMinutes = (time: string): number => {
    if (!time) return 0;

    const [hours, minutes] = time.split(":").map(Number);

    return hours * 60 + minutes;
  };

  // Generate dynamic time options
  const generateTimeOptions = (start: string, end: string) => {
    const options: string[] = [];

    const startMinutes = convertTimeToMinutes(start);

    const endMinutes = convertTimeToMinutes(end);

    // exact start time
    options.push(start);

    // generate 15 min interval
    for (let i = startMinutes + 15; i < endMinutes; i += 15) {
      const hours = Math.floor(i / 60)
        .toString()
        .padStart(2, "0");

      const minutes = (i % 60).toString().padStart(2, "0");

      options.push(`${hours}:${minutes}`);
    }

    // exact end time
    if (!options.includes(end)) {
      options.push(end);
    }
    return options;
  };

  const timeOptions = generateTimeOptions(availableStart, availableEnd);

  // End time must be greater than start time
  const filteredEndTimes = timeOptions.filter(
    (time) => convertTimeToMinutes(time) > convertTimeToMinutes(startTime),
  );

  // Duration calculate
  const duration = (() => {
    if (!startTime || !endTime) {
      return "0h 0m";
    }
    const startMinutes = convertTimeToMinutes(startTime);
    const endMinutes = convertTimeToMinutes(endTime);
    const diffMinutes = endMinutes - startMinutes;
    if (diffMinutes <= 0) {
      return "0h 0m";
    }

    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    return `${hours}h ${minutes}m`;
  })();

  const handleBooking = async () => {
    if (!user) return redirect("/login");

    if (!bookingDate) {
      toast.error("Please select booking date");
      return;
    }

    if (!startTime || !endTime) {
      toast.error("Please select start and end time");
      return;
    }

    const startMinutes = convertTimeToMinutes(startTime);
    const endMinutes = convertTimeToMinutes(endTime);
    const availableStartMinutes = convertTimeToMinutes(availableStart);
    const availableEndMinutes = convertTimeToMinutes(availableEnd);
    const isValidTime =
      startMinutes >= availableStartMinutes &&
      endMinutes <= availableEndMinutes &&
      startMinutes < endMinutes;

    if (!isValidTime) {
      toast.error(
        `Please select time between ${availableStart} - ${availableEnd}`,
      );
      return;
    }
    try {
      const bookingData: BookingPayload = {
        facilityId: _id,
        facilityName: facilityName || "",
        user_email: user?.email || "",
        bookingDate: bookingDate.toDate("Asia/Dhaka"),
        availableTimeSlots,
        hours: duration,
        pricePerHour,
        status: "pending",
      };
      await createBookingData(bookingData, token);
      toast.success("You booked successfully!");
      // Reset form
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.log(error);
      toast.error("Booking failed");
    }
  };

  return (
    <Card className="rounded-none border mt-5 p-5">
      <p className="text-sm text-muted">Starting from</p>

      <h2 className="text-3xl font-bold text-cyan-500">{facilityName}</h2>

      {/* Booking Date */}
      <DateField onChange={setBookingDate} className="w-full mt-4" name="date">
        <Label>Booking Date</Label>

        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      {/* Available Time */}
      <p className="text-sm text-muted mt-4">
        Available Time: {availableTimeSlots}
      </p>

      {/* Time Selection */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Start Time */}
        <TextField>
          <Label>Start Time</Label>

          <select
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);

              // reset end time
              setEndTime("");
            }}
            className="w-full border rounded-xl px-3 py-2 outline-none"
          >
            <option value="">Select Start Time</option>

            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </TextField>

        {/* End Time */}
        <TextField>
          <Label>End Time</Label>

          <select
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 outline-none"
          >
            <option value="">Select End Time</option>

            {filteredEndTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </TextField>
      </div>

      {/* Duration */}
      <p className="text-sm text-muted mt-4">Total Time: {duration}</p>

      {/* Price */}
      <h2 className="text-2xl font-bold text-cyan-500 mt-4">
        {" "}
        Price: ${pricePerHour}
      </h2>

      {/* Button */}
      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-cyan-500 mt-4"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
