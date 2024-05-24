import { useEffect, useState } from "react";
import { HotelBrand, LOCAL_STORAGE_KEYS } from "@/types/types";

export const useBrandStorage = () => {
  const [brands, setBrands] = useState<HotelBrand[]>([]);
  const [loadingInit, setLoadingInit] = useState<boolean>(true);

  useEffect(() => {
    const storedBrands = localStorage.getItem(LOCAL_STORAGE_KEYS.BRANDS);
    if (storedBrands) {
      setBrands(JSON.parse(storedBrands));
    }
    setLoadingInit(false);
  }, []);

  useEffect(() => {
    // Only update local storage if there are brands to store
    if (brands.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.BRANDS, JSON.stringify(brands));
    } else {
      // If brands array is empty, remove the item from local storage
      localStorage.removeItem(LOCAL_STORAGE_KEYS.BRANDS);
    }
  }, [brands]);

  const addBrand = (brand: HotelBrand) => {
    setBrands((prevBrands) => [...prevBrands, brand]);
  };

  const updateBrand = (updatedBrand: HotelBrand) => {
    setBrands((prevBrands) =>
      prevBrands.map((brand) =>
        brand.id === updatedBrand.id ? updatedBrand : brand
      )
    );
  };

  const deleteBrand = (id: string) => {
    setBrands((prevBrands) => prevBrands.filter((brand) => brand.id !== id));
  };

  return { brands, addBrand, updateBrand, deleteBrand, loadingInit };
};
