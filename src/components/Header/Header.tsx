import { Flex, Button, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <Flex justifyContent="space-between" py="24px" alignItems="center">
        <Box
          transition="0.25s ease-in"
          cursor="pointer"
          _hover={{
            transform: "scale(0.95)",
          }}
        >
          <Image
            src="/images/logo.png"
            width={257}
            height={69}
            alt="Header Logo"
          />
        </Box>

        <Flex fontSize="18px" gap="33px">
          <Text variant="link">Find a Home</Text>
          <Text variant="link">Blog</Text>
          <Text variant="link">Resources</Text>
        </Flex>

        <Flex>
          <Button width="130px" height="50px" variant="primary">
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};
