import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup";
import { HashRouter as Router } from "react-router-dom";

function init() {
  const appContainer = document.createElement("div");

  document.body.appendChild(appContainer);
  const root = createRoot(appContainer);

  root.render(
    <Router>
      <Popup />
    </Router>
  );
}

init();
