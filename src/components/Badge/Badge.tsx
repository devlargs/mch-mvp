import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";

type BadgeProps = {
  title: string;
  url?: string;
};

export const Badge: FC<BadgeProps> = ({ title, url }) => {
  return (
    <Box
      background="neutral.100"
      boxShadow="0 1px 6px 0 #14142b17"
      color="neutral.800"
      borderRadius="40px"
      p="10px 14px"
      fontSize="14px"
      fontWeight="600"
      lineHeight="1.143em"
      display="flex"
      justifyContent="space-between"
    >
      {url && <Image src={url} alt="Bed" />}
      {title}
    </Box>
  );
};
