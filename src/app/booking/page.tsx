import MyBooking from "@/components/booking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking page | SportNest",
};
const MyBookingPage = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-30">
      <MyBooking />
    </div>
  );
};

export default MyBookingPage;
