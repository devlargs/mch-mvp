import { CONTAINER_MAX_WIDTH } from "@/utils/styleDefaults";
import { Text, Flex, Box } from "@chakra-ui/react";
import { FC } from "react";
import Image from "next/image";

type ContactInformationProps = {
  name: string;
  address: string;
};

export const ContactInformation: FC<ContactInformationProps> = ({
  name,
  address,
}) => {
  return (
    <Box maxW={CONTAINER_MAX_WIDTH} m="auto" py="60px">
      <Text fontSize="36px" fontWeight="700" lineHeight="1.375em">
        Contact&nbsp;
        <Text as="span" color="#090">
          {name}
        </Text>
      </Text>

      <Box my="48px">
        <Flex alignItems="center" mb="16px">
          <Image
            src="/svgs/pinned-location.svg"
            width={40}
            height={40}
            alt="Pinned Location"
          />
          <Text
            fontSize="20px"
            fontWeight="400"
            lineHeight="1.667em"
            color="neutral.700"
          >
            {address}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Image
            src="/svgs/external-link.svg"
            width={40}
            height={40}
            alt="External Link"
          />
          <Text
            fontSize="20px"
            fontWeight="400"
            lineHeight="1.667em"
            textDecor="underline"
            color="red"
            cursor="pointer"
            transition="0.25s ease-in"
            _hover={{
              color: "neutral.800",
            }}
          >
            {name}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
