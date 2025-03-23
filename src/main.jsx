import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../client/src/components/Navbar";
import Homepage from "../client/src/components/Homepage";
import Footer from "../client/src/components/Footer";
import Login from "../client/src/components/Login";
import SignUp from "../client/src/components/SignUp";
import Profile from "../client/src/components/Profile";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
