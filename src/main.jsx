import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "../client/public/Homepage.jsx";
import Footer from "../client/public/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Homepage />
    <Footer />
  </StrictMode>
);
