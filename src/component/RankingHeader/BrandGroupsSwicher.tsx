import { useAppContext } from "@/context/AppContext";
import { Flex, FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const BrandGroupsSwicher = () => {
  const { brandGroupsView, setBrandGroupsView } = useAppContext();
  const { t } = useTranslation();

  return (
    <Flex display="flex" alignItems="center" gap={2}>
      <Text color="gray">{t("brand-view")}</Text>
      <Switch
        id="brand-group"
        isChecked={brandGroupsView}
        onChange={(e) => setBrandGroupsView(e.target.checked)}
      />
    </Flex>
  );
};

export default BrandGroupsSwicher;
