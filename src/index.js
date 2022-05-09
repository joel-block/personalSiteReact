import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Main } from "./components";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Main />
  </Router>
);
