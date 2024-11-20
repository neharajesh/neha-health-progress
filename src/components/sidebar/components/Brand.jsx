// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "../../separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  // let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
