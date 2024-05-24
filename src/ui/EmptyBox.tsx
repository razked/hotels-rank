// src/components/ui/EmptyBox.tsx
import React from "react";
import { Image, Stack, Text, Button } from "@chakra-ui/react";
import NoDataImage from "@/assets/no_data.svg";
import { useTranslation } from "react-i18next";

type EmptyBoxProps = {
  image?: string;
  boxSize?: string;
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const EmptyBox: React.FC<EmptyBoxProps> = ({
  image = NoDataImage,
  boxSize = "300px",
  title,
  buttonText,
  onButtonClick,
}) => {
  const { t } = useTranslation();

  return (
    <Stack
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      <Image
        src={image}
        alt="Empty state"
        boxSize={boxSize}
        objectFit="contain"
      />

      <Text fontWeight="500" color="gray" fontSize="lg">
        {title ?? t("no-data")}
      </Text>

      {buttonText && onButtonClick && (
        <Button onClick={onButtonClick} variant="link">
          {buttonText}
        </Button>
      )}
    </Stack>
  );
};

export default EmptyBox;
