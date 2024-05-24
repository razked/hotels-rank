import { useAppContext } from "@/context/AppContext";
import AppButton from "@/ui/AppButton";
import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BrandsFilter from "./BrandsFilter";
import { useMediaQuery } from "@chakra-ui/react";
import { Plus, Tag } from "tabler-icons-react";
import BrandGroupsSwicher from "./BrandGroupsSwicher";

const RankingHeader = () => {
  const { t } = useTranslation();
  const { toggleHotelFormModal, togglebrandModal } = useAppContext();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const btnMobileStyle = isLargerThan600 ? {} : { pr: 1, pl: 1 };

  return (
    <Flex width="100%" alignItems="flex-start" justifyContent="space-between">
      <Flex
        width="100%"
        alignItems="center"
        gap={4}
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        <BrandsFilter />
        <BrandGroupsSwicher />
      </Flex>
      <Flex width="100%" alignItems="center" gap={2} justifyContent="flex-end">
        <AppButton
          onClick={togglebrandModal}
          variant="outline"
          fontWeight="400"
          {...btnMobileStyle}
        >
          {isLargerThan600 ? t("manage-brands") : <Tag size={16} />}
        </AppButton>
        <AppButton
          onClick={toggleHotelFormModal}
          fontWeight="400"
          {...btnMobileStyle}
        >
          {isLargerThan600 ? t("add-hotel-rank") : <Plus size={16} />}
        </AppButton>
      </Flex>
    </Flex>
  );
};

export default RankingHeader;
