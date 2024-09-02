import { ContactInformation, HomeGallery } from "@/components";
import { Box, Image } from "@chakra-ui/react";
// import Image from "next/image";

const Homes = () => {
  return (
    <Box>
      <HomeGallery />
      <ContactInformation
        name="Highland Park Assisted Living"
        address="19512 N 66th Ave, Glendale AZ 85308"
      />
    </Box>
  );
};

export default Homes;
