import { MOCK_CARE_SERVICES } from "@/constants/mockCareServices";
import { Grid, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

type CareServicesType = {
  title: string;
  customIcon?: string;
};

export const CareServices: FC<{ services: CareServicesType[] }> = ({
  services,
}) => {
  return (
    <Grid
      gridColumnGap="16px"
      gridRowGap="16px"
      gridTemplateRows="auto auto"
      gridTemplateColumns="1fr 1fr"
      gridAutoColumns="1fr"
    >
      {services.map((service) => (
        <Flex gap="16px" alignItems="center">
          <Image
            src={service.customIcon ?? `/svgs/check.svg`}
            w="24px"
            h="24px"
          />
          <Text variant="h5">{service.title}</Text>
        </Flex>
      ))}
    </Grid>
  );
};
