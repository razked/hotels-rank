import RankingHeader from "./component/RankingHeader";
import RankingList from "./component/RankingList";
import AppLayout from "./layouts/AppLayout";
import { Flex } from "@chakra-ui/react";
import { useAppContext } from "@/context/AppContext";
import isEmpty from "lodash/isEmpty";
import BrandManagerModal from "./component/Brands/BrandManagerModal";

function App() {
  const { hotels, loadingInit, togglebrandModal, brandModalOpen } =
    useAppContext();

  return (
    <AppLayout loading={loadingInit}>
      <Flex direction="column" gap={6} height="100%">
        {!isEmpty(hotels) && <RankingHeader />}
        <RankingList />
        <BrandManagerModal isOpen={brandModalOpen} onClose={togglebrandModal} />
      </Flex>
    </AppLayout>
  );
}

export default App;
