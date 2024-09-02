import { Box, Image, Text, Flex, Button, Center } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <Box
        pt="80px"
        pb="32px"
        bg="neutral.400"
        display="grid"
        placeContent="center"
        textAlign="center"
      >
        <Box>
          <Center>
            <Image
              src="/images/logo.png"
              width="350"
              height="95.2"
              alt="Footer Image"
            />
          </Center>
          <Flex justifyContent="center" gap="16px" mt="16px">
            <Button variant="social">
              <FaFacebookF />
            </Button>
            <Button variant="social">
              <FaLinkedinIn />
            </Button>
            <Button variant="social">
              <FaYoutube />
            </Button>
          </Flex>

          <Box h="72px" />

          <Text fontSize="20px" fontWeight="700">
            Pages
          </Text>

          <Flex justifyContent="space-between" gap="16px" mb="24px">
            <Text variant="footer-link">Home</Text>
            <Text variant="footer-link">Find a Home</Text>
            <Text variant="footer-link">Resources</Text>
            <Text variant="footer-link">Blog</Text>
            <Text variant="footer-link">Contact Us</Text>
          </Flex>

          <Text
            color="neutral.700"
            fontSize="20px"
            fontWeight="400"
            lineHeight="1.667em"
          >
            Copyright © Modern Care Homes
          </Text>
        </Box>
      </Box>
    </footer>
  );
};
