import { ReactNode } from "react";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { customTheme } from "./customTheme";

type ThemeWrapperProps = {
  children: ReactNode;
};

const theme = extendTheme(
  customTheme,
  withDefaultColorScheme({ colorScheme: "brand" })
);

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeWrapper;
