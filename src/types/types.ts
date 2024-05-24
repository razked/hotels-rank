export type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  brand_id?: string;
  location?: { lat: number; lang: number };
};

export type HotelBrand = {
  id: string;
  name: string;
};

export type HotelBrandFilterOption = {
  label: string;
  value: string;
  colorScheme: string;
};

export const LOCAL_STORAGE_KEYS = {
  HOTELS: "hotels",
  BRANDS: "brands",
};
