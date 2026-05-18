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
