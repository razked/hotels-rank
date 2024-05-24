import React from "react";
import { Hotel } from "@/types/types";
import AppCard from "@/ui/AppCard";
import { Flex, Heading } from "@chakra-ui/react";
import startCase from "lodash/startCase";
import { BuildingSkyscraper, MapPin, Tag, World } from "tabler-icons-react";
import DetailsBlock from "@/ui/DetailsBlock";
import { useTranslation } from "react-i18next";
import HotelActionsMenu from "@/component/RankingList/HotelActionsMenu";
import { useAppContext } from "@/context/AppContext";
import { getBrandNameById } from "@/utils/helpers";

const HotelCard: React.FC<{ data: Hotel }> = ({ data }) => {
  const { t } = useTranslation();
  const { setDeleteConfirmHotelData, handleSetHotelEditMode, brands } =
    useAppContext();

  return (
    <AppCard
      flexDirection="column"
      justifyContent="space-between"
      gap={6}
      minH={{ base: "auto", sm: "330px" }}
      position="relative"
    >
      <Flex
        gap={4}
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Heading as="h4" size="sm" width="90%">
          {startCase(data.name)}
        </Heading>

        <HotelActionsMenu
          handleClickDelete={() => setDeleteConfirmHotelData(data)}
          handleClickEdit={() => handleSetHotelEditMode(data)}
        />
      </Flex>
      <Flex gap={4} wrap="wrap" flexDirection="column" flex="1">
        <DetailsBlock
          value={data.address}
          label={t("address")}
          icon={<MapPin />}
        />
        <DetailsBlock
          value={data.city}
          label={t("city")}
          icon={<BuildingSkyscraper />}
        />
        <DetailsBlock
          value={data.country}
          label={t("country")}
          icon={<World />}
        />

        {data.brand_id && (
          <DetailsBlock
            value={getBrandNameById(data.brand_id, brands)}
            label={t("brand")}
            icon={<Tag />}
          />
        )}
      </Flex>
    </AppCard>
  );
};

export default HotelCard;
