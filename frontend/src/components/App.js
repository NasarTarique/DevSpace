import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./Home";
import store from "./store";

function App(props) {
  return (
    <ChakraProvider>
      <Provider store={store}>
			  <Home />
      </Provider>
    </ChakraProvider>
  );
}
export default App;
const container = document.getElementById("app");
render(<App />, container);
