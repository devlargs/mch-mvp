import { CONTAINER_MAX_WIDTH } from "@/utils/styleDefaults";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import {
  Amenities,
  Badge,
  CareCategories,
  CareServices,
  ScheduleForm,
} from "@/components";
import { MOCK_SERVICES } from "@/constants/mockServices";
import { MOCK_CARE_CATEGORIES } from "@/constants/mockCareCategories";
import { MOCK_CARE_SERVICES } from "@/constants/mockCareServices";
import { MOCK_AMENITIES } from "@/constants/mockAmenities";

export const HomeDetail = () => {
  return (
    <Box py="64px" maxW={CONTAINER_MAX_WIDTH} m="auto">
      <Flex justifyContent="space-between">
        <Box maxW="730px">
          <Text variant="content">19512 N 66th Ave, Glendale AZ 85308</Text>
          <Text variant="success" as="h2" mb="20px">
            Highland Park Assisted Living
          </Text>
          <Flex gap="10px">
            {MOCK_SERVICES.map((services) => (
              <Badge key={services.title} title={services.title} />
            ))}
          </Flex>

          <Box maxW="150px" mb="32px" mt="8px">
            <Badge title="6-10 Residents" url="/svgs/bed.svg" />
          </Box>

          <Text variant="content">
            Whether your loved one needs short-term or long-term care, they will
            enjoy the senior living community we provide and shared interests
            enables the seniors to thrive.
          </Text>

          <Divider my="60px" />

          <Text variant="content">
            Whether your loved one needs short-term assisted living or a
            long-term care, they will enjoy the senior living community we
            provide. Those in our care enjoy community activities and social
            gatherings that allow older adults to form enriching friendships.
            Creating bonds through shared interests enables the seniors in our
            community to thrive.
          </Text>
          <Text variant="content" mt="20px">
            The many amenities we provide encourage our seniors to enjoy daily
            living to the fullest. Social opportunities, fun activities, and
            quality care ensure that your loved one has more chances for
            socializing than ever before while in assisted living. They will
            find their days filled with productive and enjoyable activities and
            may make firm friendships. Being part of a thriving community helps
            seniors increase their sense of well-being and uplifts their outlook
            on life.
          </Text>

          <Divider my="60px" />

          <Flex gap="8px" justifyContent="space-between" mb="16px">
            <Text variant="success" color="neutral.800">
              Care Provided <br />
              By
            </Text>
            <Text variant="success">
              Highland Park Assisted <br />
              Living
            </Text>
          </Flex>

          <Text variant="h4" mb="16px">
            Care Categories
          </Text>
          {MOCK_CARE_CATEGORIES.map((careCategories) => (
            <CareCategories
              title={careCategories.title}
              description={careCategories.description}
              icon="care.png"
              key={careCategories.title}
            />
          ))}

          <Divider my="60px" />

          <Text variant="h4" mb="16px">
            Care Services
          </Text>
          <CareServices services={MOCK_CARE_SERVICES} />

          <Divider my="60px" />

          <Text variant="h3" mb="48px">
            Amenities At{" "}
            <Text as="span" variant="success">
              Highland Park Assisted Living
            </Text>
          </Text>
          <Amenities amenities={MOCK_AMENITIES} />
        </Box>

        <ScheduleForm />
      </Flex>
    </Box>
  );
};
