import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
} from "react";
import { Hotel, HotelBrand, HotelBrandFilterOption } from "@/types/types";
import { useHotelStorage } from "@/hooks/useHotelStorage";
import isEmpty from "lodash/isEmpty";
import { has, map } from "lodash";
import { generateId } from "@/utils/helpers";
import { useBrandStorage } from "@/hooks/useBrandStorage";
import { MultiValue } from "chakra-react-select";

type AppContextData = {
  // hotels
  hotels: Hotel[];
  addHotel: (hotel: Hotel) => void;
  updateHotel: (hotel: Hotel) => void;
  deleteHotel: (id: string) => void;
  deleteConfirmHotelData: Hotel | null;
  setDeleteConfirmHotelData: React.Dispatch<React.SetStateAction<Hotel | null>>;
  handleDeleteHotelAfterConfirmation: () => void;
  hotelFormOpen: boolean;
  toggleHotelFormModal: () => void;
  hotelDataToEdit: Hotel | null;
  handleSetHotelEditMode: (data: Hotel) => void;
  handleUpsertHotel: (data: Hotel) => void;
  loadingInit: boolean;
  // brands
  brands: HotelBrand[];
  activeBrandFilters: any;
  setActiveBrandFilters: React.Dispatch<
    React.SetStateAction<MultiValue<HotelBrandFilterOption> | null>
  >;
  filteredHotels: Hotel[];
  brandModalOpen: boolean;
  togglebrandModal: () => void;
  addBrand: (hotel: HotelBrand) => void;
  deleteBrand: (id: string) => void;
  updateBrand: (hotel: HotelBrand) => void;
  clearBrandIdForHotels: (id: string) => void;
  brandGroupsView: boolean;
  setBrandGroupsView: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextData | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [deleteConfirmHotelData, setDeleteConfirmHotelData] =
    useState<Hotel | null>(null);
  const [hotelDataToEdit, setHotelDataToEdit] = useState<Hotel | null>(null);
  const [hotelFormOpen, setHotelFormOpen] = useState<boolean>(false);
  const [activeBrandFilters, setActiveBrandFilters] =
    useState<MultiValue<HotelBrandFilterOption> | null>(null);
  const [brandModalOpen, setBrandModalOpen] = useState<boolean>(false);
  const [brandGroupsView, setBrandGroupsView] = useState<boolean>(false);

  // data from hooks
  const {
    hotels,
    addHotel,
    updateHotel,
    deleteHotel,
    loadingInit,
    clearBrandIdForHotels,
  } = useHotelStorage();
  const { brands, addBrand, deleteBrand, updateBrand } = useBrandStorage();

  const handleDeleteHotelAfterConfirmation = () => {
    if (!isEmpty(deleteConfirmHotelData)) {
      deleteHotel(deleteConfirmHotelData?.id);
      setDeleteConfirmHotelData(null);
    }
  };

  const toggleHotelFormModal = () => {
    setHotelDataToEdit(null);
    return setHotelFormOpen(!hotelFormOpen);
  };

  const handleUpsertHotel = (data: Hotel) => {
    if (has(data, "id")) {
      updateHotel(data);
    } else {
      addHotel({ ...data, id: generateId() });
    }
    setHotelFormOpen(false);
    setHotelDataToEdit(null);
  };

  const handleSetHotelEditMode = (data: Hotel) => {
    setHotelDataToEdit(data);
    setHotelFormOpen(true);
  };

  const filteredHotels = useMemo(() => {
    if (isEmpty(activeBrandFilters)) {
      return hotels;
    }
    const selectedBrandIds = map(
      activeBrandFilters || [],
      (filter) => filter.value
    );
    return hotels.filter((hotel) =>
      selectedBrandIds.includes(hotel?.brand_id ?? "")
    );
  }, [hotels, activeBrandFilters]);

  const togglebrandModal = () => {
    return setBrandModalOpen(!brandModalOpen);
  };

  return (
    <AppContext.Provider
      value={{
        hotels,
        addHotel,
        updateHotel,
        deleteHotel,
        setDeleteConfirmHotelData,
        deleteConfirmHotelData,
        handleDeleteHotelAfterConfirmation,
        hotelFormOpen,
        toggleHotelFormModal,
        hotelDataToEdit,
        handleSetHotelEditMode,
        handleUpsertHotel,
        loadingInit,
        brands,
        activeBrandFilters,
        filteredHotels,
        setActiveBrandFilters,
        brandModalOpen,
        togglebrandModal,
        addBrand,
        deleteBrand,
        updateBrand,
        clearBrandIdForHotels,
        brandGroupsView,
        setBrandGroupsView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
