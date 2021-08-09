import React, { useState, useEffect, Fragment } from "react";
import { Center, Grid, Box, Flex, Button, Input } from "@chakra-ui/react";
import { DragDropContext} from "react-beautiful-dnd";
import Column from "./Column";

function Home() {
  return (
    <Grid w="90vw" margin="auto">
      <Center h="100px" w="100%" marginTop="50px">
        <Flex
          bg="white"
          p={4}
          borderRadius="10px"
          boxShadow="4px 4px 4px #00000022"
        >
          <Box p={2}>
            <Input
              variant="outline"
              w="lg"
              placeholder="Workspace Name"
              focusBorderColor="cyan.200"
            ></Input>
          </Box>
          <Box p={2}>
            <Button
              fontWeight="medium"
              letterSpacing="1px"
              colorScheme="cyan"
              color="white"
              size="md"
            >
              CREATE
            </Button>
          </Box>
        </Flex>
      </Center>
      <DragDropContext>
              <Grid marginTop={16} templateColumns="repeat(3,1fr)">
                      <Column colour="teal.500" heading="WORKSPACES" />
                      <Column colour="blue.500" heading="FAVOURITES" />
                      <Column colour="pink.400" heading="RECENT" />
              </Grid>
      </DragDropContext>
    </Grid>
  );
}
export default Home;
