import React from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import "./Layout.css"; // Add a CSS file for styling

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
