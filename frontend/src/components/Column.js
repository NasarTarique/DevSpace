import React from "react";
import { VStack, Center, Box } from "@chakra-ui/react";

const Wrow = (props) => {
  return (
    <Center pb={4} w="100%">
      <Box
        borderRadius="5px"
        w="90%"
        paddingBottom="10px"
        boxShadow="4px 4px 4px #00000011"
        bg="white"
        color={props.colour}
        p={4}
      >
        {props.name}
      </Box>
    </Center>
  );
};

const Column = (props) => {
  return (
    <VStack borderRadius="10px" w="400px" border="2px solid #dfdfdf">
      <Center
        h="14"
        marginTop={3}
        marginBottom={4}
        letterSpacing="2px"
        borderRadius="5px"
        color="white"
        w="90%"
        bg={props.colour}
      >
        {props.heading}
      </Center>
      <Wrow name="Workspace 1" colour={props.colour} />
      <Wrow name="Workspace 2" colour={props.colour} />
    </VStack>
  );
};

export default Column;
