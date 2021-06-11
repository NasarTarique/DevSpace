import React, { useState, useEffect } from "react";
import {render} from "react-dom"
function App() {
  return (
		  <h1>
				  Main  Page
		  </h1>
  );
}
export default App;
const container = document.getElementById("app");
render(<App />, container);
