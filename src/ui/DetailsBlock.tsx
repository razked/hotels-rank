import React, { ReactElement } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import IconBox from "./IconBox"; // Assuming you have already created the IconBox component

type DetailsBlockProps = {
  value: string;
  label: string;
  icon: ReactElement;
};

const DetailsBlock: React.FC<DetailsBlockProps> = ({ value, label, icon }) => {
  return (
    <Flex alignItems="flex-start" gap={4}>
      <IconBox icon={icon} />
      <Box>
        <Text color="gray" fontSize="xs">
          {label}
        </Text>
        <Text fontWeight="bold">{value}</Text>
      </Box>
    </Flex>
  );
};

export default DetailsBlock;
