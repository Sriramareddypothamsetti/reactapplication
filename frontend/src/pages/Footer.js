import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="symb">
        <div>
          <InstagramIcon />
        </div>
        <div>
          <WhatsAppIcon />
        </div>
        <div>
          <FacebookIcon />
        </div>
      </div>
      <p>@ ALL COPYRIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
