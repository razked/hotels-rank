import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "@/component/Header/index";

type AppLayoutProps = {
  children: ReactNode;
  loading: boolean;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children, loading }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      {/* Main Content */}
      <Box flex="1" p={6} overflowY="auto">
        {loading ? "..." : children}
      </Box>
    </Flex>
  );
};

export default AppLayout;
