import { chakra, Card } from "@chakra-ui/react";

const AppCard = chakra(Card, {
  baseStyle: {
    padding: 6,
    boxShadow: "lg",
    borderRadius: 10,
  },
});

export default AppCard;
