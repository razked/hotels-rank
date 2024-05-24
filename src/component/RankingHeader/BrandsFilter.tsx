import { useAppContext } from "@/context/AppContext";
import { ChakraStylesConfig, Select } from "chakra-react-select";
import { map } from "lodash";
import { useTranslation } from "react-i18next";

const BrandsFilter = () => {
  const { brands, activeBrandFilters, setActiveBrandFilters } = useAppContext();
  const { t } = useTranslation();

  const chakraStyles: ChakraStylesConfig = {
    container: (provided) => ({
      ...provided,
      minWidth: "240px",
    }),
  };

  return (
    <Select
      chakraStyles={chakraStyles}
      placeholder={t("filter-brands")}
      isMulti
      colorScheme="purple"
      value={activeBrandFilters}
      onChange={setActiveBrandFilters}
      options={map(brands, (i) => ({
        label: i.name,
        value: i.id,
        colorScheme: "purple",
      }))}
    />
  );
};

export default BrandsFilter;
