import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

type CareCategoriesProps = {
  title: string;
  icon: string;
  description?: string;
};

export const CareCategories: FC<CareCategoriesProps> = ({
  title,
  icon,
  description,
}) => {
  return (
    <Flex gap="16px" mb="24px">
      <Image src={`/svgs/${icon}`} height="32px" width="32px" />
      {
        <Box>
          <Text variant="h5">{title}</Text>
          <Box>{description && <Text variant="div">{description}</Text>}</Box>
        </Box>
      }
    </Flex>
  );
};
