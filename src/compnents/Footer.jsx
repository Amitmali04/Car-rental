import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex-shrink-0  bottom-0 bg-primary">
      <div className="footer-copyright text-center py-3 text-light" >
        © 2023 Copyright:
        <Link to="/"> CarRental</Link>
      </div>
    </footer>
  );
};

export default Footer;
