import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    neutral: {
      100: "white",
      200: "#f9f9f9",
      300: "#f6f6f6",
      400: "#e9e9e9",
      500: "#b7b7b7",
      600: "#8d8d91",
      700: "#616066",
      800: "#222223",
    },
    primary: {
      100: "#e50914",
    },
    green: {
      100: "#090",
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          cursor: "pointer",
          backgroundColor: "neutral.800",
          color: "white",
          borderRadius: "12px",
          fontWeight: 400,
          padding: "16px 26px",
          fontSize: "16px",
          lineHeight: "1.125em",
          transition: "0.25s ease-in",
          _hover: {
            backgroundColor: "primary.100",
            transform: "scale(0.95)",
          },
        },
        social: {
          backgroundColor: "neutral.800",
          color: "white",
          borderRadius: "50%",
          width: "34px",
          height: "34px",
          padding: 0,
          transition: "0.25s ease-in",
          _hover: {
            background: "primary.100",
          },
        },
      },
    },
    Text: {
      variants: {
        link: {
          fontSize: "18px",
          cursor: "pointer",
          color: "neutral.800",
          transition: "0.25s ease-in",
          _hover: {
            color: "primary.100",
            transform: "scale(0.95)",
          },
        },
        "footer-link": {
          fontSize: "16px",
          cursor: "pointer",
          color: "neutral.700",
          lineHeight: "1.125em",
          transition: "0.25s ease-in",
          _hover: {
            color: "primary.100",
            transform: "scale(0.95)",
          },
        },
      },
    },
  },
});

export default theme;
