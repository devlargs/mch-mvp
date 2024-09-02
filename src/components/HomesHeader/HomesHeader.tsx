"use client";
import { CONTAINER_MAX_WIDTH } from "@/utils/styleDefaults";
import { Box, Flex, Text } from "@chakra-ui/react";

export const HomesHeader = () => {
  return (
    <Box mt="40px" position="sticky" top="0" bg="white" zIndex="sticky">
      <Box
        maxW={CONTAINER_MAX_WIDTH}
        mx="auto"
        width="100%"
        borderBottom="1px solid #8d8d91"
      >
        <Flex
          fontSize="20px"
          color="neutral.700"
          gap="16px"
          textTransform="uppercase"
          py="16px"
        >
          <Text>About</Text>
          <Text>Care</Text>
          <Text>Amenities</Text>
          <Text>Gallery</Text>
          <Text>Contact</Text>
        </Flex>
      </Box>
    </Box>
  );
};
