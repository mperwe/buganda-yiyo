import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use react-dom/client
import App from "./App";
import "../src/index.css"

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot
root.render(<App />);
