export const customTheme = {
  styles: {
    global: {
      body: {
        bg: "#f7f7f8",
        fontSize: "14px",
      },
    },
  },
  colors: {
    brand: {
      200: "#f2f1fe",
      300: "#e1dffd",
      400: "#877df9",
      500: "#7165F8",
      600: "#5b4df7",
      700: "#4434f6",
      800: "#2e1cf5",
    },
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "brand.500",
      },
      variants: {
        outline: {
          field: {
            fontSize: "14px",
            focusBorderColor: "gray.500",
            _hover: {
              borderColor: "brand.500",
            },
          },
        },
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "brand.500",
      },
      variants: {
        outline: {
          field: {
            fontSize: "14px",
            focusBorderColor: "gray.500",
            _hover: {
              borderColor: "brand.500",
            },
          },
        },
      },
    },
    FormLabel: {
      baseStyle: {
        color: "gray.500",
        fontSize: "12px",
      },
    },
  },
};
