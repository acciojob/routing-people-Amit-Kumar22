import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

//const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById("root"))

 ReactDOM.render
 (<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root"));