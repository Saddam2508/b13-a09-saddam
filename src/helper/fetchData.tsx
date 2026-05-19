import { TFacility } from "@/types/facilityType";
import { TLeisure } from "@/types/leisureType";
import { body } from "framer-motion/client";

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

export const createFacilitiesdData = async (facility:TFacility) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/api/facilities`, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(facility)
  }

);

  if (!res.ok) return null;

  const data: TFacility = await res.json();
 
  return data;
};

export const getfacilitiesdData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/api/facilities`

);

  if (!res.ok) return null;

  const data: TFacility = await res.json();
 
  return data;
};

