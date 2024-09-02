import {
  Box,
  Flex,
  Image,
  Text,
  Textarea,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

const customInputStyles = {
  background: "neutral.300",
  color: "neutral.800",
  border: "1px solid #f6f6f6",
  borderRadius: "12px",
  minHeight: "64px",
  px: "24px",
  fontSize: "18px",
  transition: "0.3s ease-in",
  mb: "16px",
};

export const ScheduleForm = () => {
  return (
    <Box
      maxH="550px"
      maxW="460px"
      alignSelf="stretch"
      zIndex="9999"
      top="80px"
      p="48px 48px 50px"
      bg="neutral.100"
      boxShadow="0 3px 20px 0 #080f340f"
      borderRadius="24px"
      marginTop="-184px"
      position="sticky"
    >
      <Flex gap="16px" mb="32px">
        <Image
          src="/images/calendar.png"
          w="64px"
          h="64px"
          alt="Calendar Icon"
        />
        <Text variant="h2">
          Schedule a Tour or <br /> Request More Information
        </Text>
      </Flex>
      <Input placeholder="Full Name" {...customInputStyles} />
      <Input placeholder="Phone" {...customInputStyles} />
      <Input placeholder="Email" {...customInputStyles} />
      <Textarea
        placeholder="Questions and additional information"
        {...customInputStyles}
      />
      <Center>
        <Button
          height="50px"
          fontSize="20px"
          variant="primary"
          bg="primary.100"
        >
          Submit
        </Button>
      </Center>
    </Box>
  );
};
