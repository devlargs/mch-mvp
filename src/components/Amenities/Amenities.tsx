import { Flex, Image, Text, Grid } from "@chakra-ui/react";
import { FC } from "react";

export const Amenities: FC<{
  amenities: Array<{ title: string; icon: string }>;
}> = ({ amenities }) => {
  return (
    <Grid
      gridColumnGap="26px"
      gridRowGap="60px"
      gridTemplateRows="auto"
      gridTemplateColumns="1fr 1fr 1fr"
      gridAutoColumns="1fr"
    >
      {amenities.map((service) => (
        <Flex gap="16px" alignItems="center" key={service.title}>
          <Image
            src={service.icon ?? `/svgs/check.svg`}
            w="35px"
            h="35px"
            alt={`Amenities - ${service.title}`}
          />
          <Text variant="h5">{service.title}</Text>
        </Flex>
      ))}
    </Grid>
  );
};
