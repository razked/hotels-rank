import { useEffect, useState } from "react";
import { Hotel, LOCAL_STORAGE_KEYS } from "@/types/types";

export const useHotelStorage = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loadingInit, setLoadingInit] = useState<boolean>(true);

  useEffect(() => {
    const storedHotels = localStorage.getItem(LOCAL_STORAGE_KEYS.HOTELS);
    if (storedHotels) {
      setHotels(JSON.parse(storedHotels));
    }
    setLoadingInit(false);
  }, []);

  useEffect(() => {
    // Only update local storage if there are hotels to store
    if (hotels.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.HOTELS, JSON.stringify(hotels));
    } else {
      // If hotels array is empty, remove the item from local storage
      localStorage.removeItem(LOCAL_STORAGE_KEYS.HOTELS);
    }
  }, [hotels]);

  const addHotel = (hotel: Hotel) => {
    setHotels((prevHotels) => [...prevHotels, hotel]);
  };

  const updateHotel = (updatedHotel: Hotel) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) =>
        hotel.id === updatedHotel.id ? updatedHotel : hotel
      )
    );
  };

  const deleteHotel = (id: string) => {
    setHotels((prevHotels) => prevHotels.filter((hotel) => hotel.id !== id));
  };

  const clearBrandIdForHotels = (brandId: string) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) => ({
        ...hotel,
        brand_id: hotel.brand_id === brandId ? "" : hotel.brand_id,
      }))
    );
  };

  return {
    hotels,
    addHotel,
    updateHotel,
    deleteHotel,
    loadingInit,
    clearBrandIdForHotels,
  };
};
