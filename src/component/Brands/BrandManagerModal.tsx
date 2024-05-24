import React from "react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "react-i18next";
import map from "lodash/map";

import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";
import SingleBrandBlock from "./SingleBrandBlock";
import { isEmpty } from "lodash";
import EmptyBox from "@/ui/EmptyBox";
import { HotelBrand } from "@/types/types";
import { generateId } from "@/utils/helpers";
import AppButton from "@/ui/AppButton";

type BrandManagerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BrandManagerModal: React.FC<BrandManagerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { brands, addBrand } = useAppContext();
  const { t } = useTranslation();

  const addNewBrandBlock = () => {
    const newBrand: HotelBrand = {
      id: generateId(),
      name: "New Brand",
    };
    addBrand(newBrand);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("manage-brands")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column">
          {isEmpty(brands) ? (
            <EmptyBox
              boxSize="80px"
              title={t("no-brands")}
              buttonText={t("add-brand")}
              onButtonClick={addNewBrandBlock}
            />
          ) : (
            <Flex flexDirection="column" gap={3}>
              <Box>
                {map(brands, (brand) => (
                  <SingleBrandBlock key={brand.id} data={brand} />
                ))}
              </Box>
              <AppButton variant="ghost" onClick={addNewBrandBlock}>
                {t("add-brand")}
              </AppButton>
            </Flex>
          )}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default BrandManagerModal;
