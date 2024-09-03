import { CONTAINER_MAX_WIDTH } from "@/utils/styleDefaults";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";

export const HomeGallery = () => {
  return (
    <Box maxW={CONTAINER_MAX_WIDTH} m="auto" py="100px">
      <Flex justifyContent="space-between">
        <Text
          fontSize="32px"
          color="neutral.800"
          fontWeight={700}
          lineHeight="1.375em"
        >
          Home Gallery
        </Text>
        <Button height="50px" fontSize="20px" variant="primary">
          Request Information
        </Button>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mt="40px">
        {[1, 2, 3, 4].map((i) => (
          <Box key={i}>
            <Image
              src={`/images/gallery/${i}.jpg`}
              width={298}
              height={198.66}
              alt={`Gallery Image - ${i}`}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
