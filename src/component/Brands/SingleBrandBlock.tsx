import React from "react";
import { HotelBrand } from "@/types/types";
import {
  EditablePreview,
  useColorModeValue,
  IconButton,
  Input,
  useEditableControls,
  ButtonGroup,
  Editable,
  EditableInput,
  Divider,
  Box,
} from "@chakra-ui/react";
import { DeviceFloppy, Pencil, Trash, X } from "tabler-icons-react";
import { useAppContext } from "@/context/AppContext";

const SingleBrandBlock: React.FC<{ data: HotelBrand }> = ({ data }) => {
  const { deleteBrand, updateBrand, clearBrandIdForHotels } = useAppContext();

  const handleClearBrand = () => {
    clearBrandIdForHotels(data.id);
    deleteBrand(data.id);
  };

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={1}>
        <IconButton
          aria-label="save"
          variant="ghost"
          colorScheme="purple"
          icon={<DeviceFloppy size={16} />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="cancel"
          variant="ghost"
          colorScheme="gray"
          icon={<X size={16} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={1}>
        <IconButton
          aria-label="edit"
          size="sm"
          variant="ghost"
          colorScheme="gray"
          icon={<Pencil size={16} />}
          {...getEditButtonProps()}
        />
        <IconButton
          aria-label="delete"
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={handleClearBrand}
          icon={<Trash size={16} />}
        />
      </ButtonGroup>
    );
  }

  return (
    <Box>
      <Editable
        defaultValue={data.name}
        isPreviewFocusable={true}
        selectAllOnFocus={false}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        pt={2}
        pb={2}
        onSubmit={(newVal) => updateBrand({ ...data, name: newVal })}
      >
        <EditablePreview
          py={2}
          px={4}
          width="100%"
          _hover={{
            background: useColorModeValue("gray.100", "gray.700"),
          }}
        />
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
      <Divider />
    </Box>
  );
};

export default SingleBrandBlock;
