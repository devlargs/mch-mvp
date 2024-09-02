import { extendTheme } from "@chakra-ui/react";
import { m } from "framer-motion";

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
        rounded: {
          cursor: "pointer",
          backgroundColor: "white",
          color: "neutral.800",
          borderRadius: "1000px",
          fontWeight: 600,
          padding: "20px 40px",
          fontSize: "16px",
          lineHeight: "1.111em",
          transition: "0.25s ease-in",
          alignItems: "center",
          _hover: {
            color: "white",
            backgroundColor: "primary.100",
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
        content: {
          color: "neutral.700",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "1.667em",
        },
        success: {
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "1.375em",
          color: "green.100",
        },
        // headings
        h3: {
          color: "neutral.800",
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "1.375em",
        },
        h4: {
          as: "h4",
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: "1.364em",
          color: "neutral.800",
        },
        h5: {
          color: "neutral.800",
          as: "h5",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "1.333em",
        },
        div: {
          color: "neutral.700",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "1.667em",
          display: "inline-block",
        },
      },
    },
  },
});

export default theme;
