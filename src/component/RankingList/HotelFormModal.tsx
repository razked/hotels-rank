import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Hotel, HotelBrand } from "@/types/types";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import AppButton from "@/ui/AppButton";

type HotelFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Hotel) => void;
};

// Define a type for field names
type FieldName = keyof Hotel;

const HotelFormModal: React.FC<HotelFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const { hotelDataToEdit, brands } = useAppContext();
  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Hotel>();

  const fields = [
    { name: "name", label: t("name") },
    { name: "city", label: t("city") },
    { name: "country", label: t("country") },
    { name: "address", label: t("address") },
    { name: "brand_id", label: t("brand"), select: true },
  ];

  useEffect(() => {
    if (hotelDataToEdit) {
      reset(hotelDataToEdit);
    } else {
      reset({ brand_id: "" });
    }
  }, [hotelDataToEdit, isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isEmpty(hotelDataToEdit)
            ? t("create-hotel-title")
            : t("edit-hotel-title", { name: hotelDataToEdit.name })}
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody display="flex" flexDirection="column" gap={4}>
            {fields.map((field) => (
              <FormControl
                key={field.name}
                colorScheme="red"
                isInvalid={!!errors[field.name as FieldName]}
              >
                <FormLabel>{field.label}</FormLabel>
                {field.select ? (
                  <Select
                    {...register(field.name as FieldName, {})}
                    placeholder={t("select-brand-placeholder")}
                  >
                    {brands.map((brand: HotelBrand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    {...register(field.name as FieldName, {
                      required: `${field.label} is required`,
                    })}
                  />
                )}
                <FormErrorMessage>
                  {errors[field.name as FieldName]?.message}
                </FormErrorMessage>
              </FormControl>
            ))}
          </ModalBody>
          <ModalFooter>
            <AppButton onClick={onClose} mr={3} colorScheme="gray">
              {t("close")}
            </AppButton>
            <AppButton type="submit">{t("save")}</AppButton>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default HotelFormModal;
