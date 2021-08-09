import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";

function App() {
  return (
    <ChakraProvider>
      <Box minH="100vh" bg="#f5f5f5">
        <Nav />
        <Login />
      </Box>
    </ChakraProvider>
  );
  // </Home>
}
export default App;
const container = document.getElementById("app");
render(<App />, container);
