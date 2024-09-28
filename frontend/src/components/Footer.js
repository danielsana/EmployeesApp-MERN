import React from "react";
import { FaInstagram , FaTwitter , FaFacebook} from 'react-icons/fa';




function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
        <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
      <div className="slogan">
        <p>make IT happen</p>
      </div>
      <div className="apps">
        <p>Download on PlayStore</p>
        <p>GetIt on AppleStore</p>
      </div>
    </div>
  );
}

export default Footer;
