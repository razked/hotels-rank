import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Trash } from "tabler-icons-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import AppButton from "./AppButton";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  title: string;
  valueToDelete?: string;
}

const DeleteConfirmationModal: FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onDelete,
  title,
  valueToDelete,
}) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader textAlign="center" pb={3}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        {valueToDelete && (
          <ModalBody
            textAlign="center"
            pt={0}
          >{`"${valueToDelete}"`}</ModalBody>
        )}
        <ModalFooter
          pb={2}
          pt={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <AppButton colorScheme="gray" onClick={onClose}>
            {t("cancel")}
          </AppButton>
          <AppButton
            colorScheme="red"
            onClick={onDelete}
            leftIcon={<Trash size={16} />}
            fontSize="sm"
          >
            {t("delete")}
          </AppButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirmationModal;
