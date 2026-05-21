import { TFacility } from "./facilityType";

type BookingInfo =
  | "image"
  | "facilityType"
  | "id"
  | "location"
  | "capacity"
  | "description"
  | "email"
  | "_id";

export type BookingPayload = Omit<TFacility, BookingInfo> & {
  _id?: string;
  facilityId: string;
  user_email?: string;
  bookingDate: Date | null;
  hours?: string;
  total_price?: string;
  status: "pending" | "fulfilled";
};
