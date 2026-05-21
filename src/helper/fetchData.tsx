import { BookingPayload } from "@/types/bookingType";
import { TFacility } from "@/types/facilityType";
import { TLeisure } from "@/types/leisureType";

export const fetchFacilitiesData = async () => {
  const baseUrl = process.env.BETTER_AUTH_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/data.json`);

  if (!res.ok) return null;

  const facilitiy: TFacility[] = await res.json();

  return facilitiy;
};

export const fetchLeisureData = async () => {
  const baseUrl = process.env.BETTER_AUTH_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/leisure.json`);

  if (!res.ok) return null;

  const leisure: TLeisure[] = await res.json();

  return leisure;
};

export const fetchTrustedData = async () => {
  const baseUrl = process.env.BETTER_AUTH_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/trusted.json`);

  if (!res.ok) return null;

  const trusted: TLeisure[] = await res.json();

  return trusted;
};

export const createFacilitiesdData = async (facility: TFacility) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/api/facilities`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(facility),
  });

  if (!res.ok) return null;

  const data: TFacility = await res.json();

  return data;
};

type TFacilityResponse = {
  success: boolean;
  data: TFacility[];
};

export const getfacilitiesdData = async (token: string): Promise<TFacilityResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");
if(!token) {
  throw new Error("Token not found");
}
  const res = await fetch(`${baseUrl}/api/facilities`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  } );
  if (!res.ok) {
    throw new Error("Failed to get facility");
  }
  return res.json();
};

export const updatefacilitiesdData = async (
  id: string,
  facility: Partial<TFacility>,
): Promise<TFacilityResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/api/facilities/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(facility),
  });
  if (!res.ok) {
    throw new Error("Failed to Update facility");
  }
  return res.json();
};

export const deletefacilitiesdData = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");
  const res = await fetch(`${baseUrl}/api/facilities/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete facility");
  }
  return res.json();
};

export const createBookingData = async (facility: BookingPayload) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/api/booking`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(facility),
  });

  if (!res.ok) return null;

  const data: BookingPayload = await res.json();
  return data;
};

type TBookingResponse = {
  success: boolean;
  data: BookingPayload[];
};

export const getBookingData = async (): Promise<TBookingResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/api/booking`);
  if (!res.ok) {
    throw new Error("Failed to get booking");
  }
  return res.json();
};

export const deleteBookingData = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");
  const res = await fetch(`${baseUrl}/api/booking/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete booking");
  }
  return res.json();
};
