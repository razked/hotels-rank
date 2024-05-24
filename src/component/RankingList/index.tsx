import { useMemo } from "react";
import { useAppContext } from "@/context/AppContext";
import isEmpty from "lodash/isEmpty";
import EmptyRankingList from "./EmptyRankingList";
import DeleteConfirmationModal from "@/ui/DeleteConfirmationModal";
import { useTranslation } from "react-i18next";
import HotelFormModal from "@/component/RankingList/HotelFormModal";
import HotelList from "@/component/RankingList/HotelList";
import { HotelBrand } from "@/types/types";

const RankingList = () => {
  const {
    hotels,
    filteredHotels,
    deleteConfirmHotelData,
    handleDeleteHotelAfterConfirmation,
    setDeleteConfirmHotelData,
    hotelFormOpen,
    toggleHotelFormModal,
    handleUpsertHotel,
    brandGroupsView,
    brands,
  } = useAppContext();
  const { t } = useTranslation();

  const brandNames = useMemo(() => {
    return brands.reduce((acc: Record<string, string>, brand: HotelBrand) => {
      acc[brand.id] = brand.name;
      return acc;
    }, {});
  }, [brands]);

  return (
    <>
      {isEmpty(hotels) ? (
        <EmptyRankingList />
      ) : (
        <HotelList
          hotels={filteredHotels}
          groupedByBrand={brandGroupsView}
          brands={brandNames}
        />
      )}

      <DeleteConfirmationModal
        isOpen={!isEmpty(deleteConfirmHotelData)}
        onClose={() => setDeleteConfirmHotelData(null)}
        onDelete={handleDeleteHotelAfterConfirmation}
        valueToDelete={deleteConfirmHotelData?.name}
        title={t("delete-hotel")}
      />

      <HotelFormModal
        isOpen={hotelFormOpen}
        onSubmit={handleUpsertHotel}
        onClose={toggleHotelFormModal}
      />
    </>
  );
};

export default RankingList;
