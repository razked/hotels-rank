import Logo from "@/ui/Logo";
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      bg="white"
      minHeight="60px"
      position="sticky"
      top={0}
      zIndex={999}
      boxShadow="lg"
      display="flex"
      gap={1}
      justifyContent="center"
      alignItems="center"
    >
      <Logo />
    </Box>
  );
};

export default Header;
