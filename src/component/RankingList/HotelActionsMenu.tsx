import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useTheme,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Pencil, Trash, DotsVertical } from "tabler-icons-react";

type HotelActionsMenuProps = {
  handleClickEdit: () => void;
  handleClickDelete: () => void;
};

const HotelActionsMenu: React.FC<HotelActionsMenuProps> = ({
  handleClickEdit,
  handleClickDelete,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={IconButton}
        position="absolute"
        top={3}
        right={1.5}
        icon={<DotsVertical size={16} color="gray" />}
        variant="ghost"
        colorScheme="gray"
      />
      <MenuList>
        <MenuItem
          onClick={handleClickEdit}
          icon={<Pencil size={16} color={theme.colors.brand[500]} />}
        >
          {t("edit")}
        </MenuItem>
        <MenuItem
          onClick={handleClickDelete}
          icon={<Trash size={16} color={theme.colors.red[500]} />}
        >
          {t("delete")}.
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HotelActionsMenu;
