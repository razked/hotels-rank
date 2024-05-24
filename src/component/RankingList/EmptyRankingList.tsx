import EmptyBox from "@/ui/EmptyBox";
import EmptyRankingsImage from "@/assets/empy_list.svg";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context/AppContext";

const EmptyRankingList = () => {
  const { t } = useTranslation();
  const { toggleHotelFormModal } = useAppContext();

  return (
    <EmptyBox
      image={EmptyRankingsImage}
      title={t("no-hotels")}
      buttonText={t("add-hotel-rank")}
      onButtonClick={toggleHotelFormModal}
    />
  );
};

export default EmptyRankingList;
