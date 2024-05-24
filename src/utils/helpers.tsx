import { HotelBrand } from "@/types/types";
import { find } from "lodash";
import { v4 as uuidv4 } from "uuid";

export const generateId = (): string => {
  return uuidv4();
};

export const getBrandNameById = (id: string, arr: HotelBrand[]): string => {
  const brandObj = find(arr, (i: HotelBrand) => i.id === id);

  return brandObj ? brandObj.name : "";
};
