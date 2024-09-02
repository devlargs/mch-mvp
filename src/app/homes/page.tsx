import {
  ContactInformation,
  HomeDetail,
  HomeGallery,
  HomesHeader,
} from "@/components";
import { CONTAINER_MAX_WIDTH } from "@/utils/styleDefaults";
import { Box, Image, Button } from "@chakra-ui/react";
import { MdOutlineCameraAlt } from "react-icons/md";

const Homes = () => {
  return (
    <Box>
      <Box pos="relative">
        <Image
          src="/images/default-house.png"
          width="100%"
          maxH="515px"
          objectFit="cover"
          alt="Default House"
        />
      </Box>
      <Box bg="red" maxW={CONTAINER_MAX_WIDTH} px="24px" m="auto" mt="-100px">
        <Button fontSize="20px" variant="rounded" w={176} h={62}>
          <MdOutlineCameraAlt />
          &nbsp; Gallery
        </Button>
      </Box>

      <HomesHeader />
      <HomeDetail />
      <HomeGallery />

      <ContactInformation
        name="Highland Park Assisted Living"
        address="19512 N 66th Ave, Glendale AZ 85308"
      />
    </Box>
  );
};

export default Homes;
