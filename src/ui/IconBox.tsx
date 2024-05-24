import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

type IconBoxProps = {
  icon: ReactElement;
};

const IconBox: React.FC<IconBoxProps> = ({ icon }) => {
  return (
    <Box
      width="36px"
      height="36px"
      bg="brand.200"
      borderRadius="md"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="brand.500"
      p={2}
    >
      {icon}
    </Box>
  );
};

export default IconBox;
