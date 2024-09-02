import { Center, Image } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer>
      <Center pt="80px" pb="32px" bg="neutral.400">
        <Image
          src="/images/logo.png"
          width="350"
          height="95.2"
          alt="Footer Image"
        />
      </Center>
    </footer>
  );
};
