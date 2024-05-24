import { Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Flex gap={1} justifyContent="center" alignItems="center">
      <Heading as="h2" size="md">
        {t("app-title-first")}
      </Heading>
      <Heading as="h2" size="md" color="brand.500">
        {t("app-title-second")}
      </Heading>
    </Flex>
  );
};

export default Logo;
