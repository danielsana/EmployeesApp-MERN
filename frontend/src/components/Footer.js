import React from "react";
import { FaInstagram , FaTwitter , FaFacebook , FaApple , FaGooglePlay} from 'react-icons/fa';

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
        <p>make <br /> IT <br /> happen</p>
      </div>
      <div className="apps">
        <p><span>
          <FaGooglePlay/>
          </span> Download on PlayStore</p>
        <p>
          <span>
            <FaApple />
          </span> Get ItOn AppleStore</p>
      </div>
    </div>
  );
}

export default Footer;
