import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div>
      {/* Navbar  */}
      <Navbar />

      {/* Main containt */}
      <div className="section">
        {children}
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Layout;
