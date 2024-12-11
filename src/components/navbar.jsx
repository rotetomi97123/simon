import React, { useEffect, useState } from "react";
import Logo from "../assets/simons_logo_cropped.png";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import hamburger from "../assets/hamburger.svg";

const navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav_wrapper">
      <div className="nav_upper">
        <div className="nav_upper_flex">
          <div className="nav_upper_left">
            <div className="nav_content">
              <img src={phone} alt="phone" />
              <a href="tel:+063999999">
                <p>063 999 999</p>
              </a>
            </div>
            <div className="nav_content">
              <img src={email} alt="email" />
              <a href="mailto:simons@gmail.com">
                <p>simons@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="nav_icons_wrapper">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={fb} alt="fb" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={insta} alt="insta" />
            </a>
            <a href="mailto:simons@gmail.com">
              <img src={email} alt="email" />
            </a>
          </div>
        </div>
      </div>
      <div className="nav_lower">
        <div className="nav_lower_flex">
          <img src={Logo} alt="logo" />
          <div className="nav_lower_flex2">
            <ul>
              <li>Početna</li>
              <li>Usluge</li>
              <li>O nama</li>
              <li>Kontakt</li>
            </ul>
            <a href="tel:+063999999">
              <p className="nav_lower_call">(+381) 63 999 999</p>
            </a>
          </div>
          <img
            src={hamburger}
            alt="menu"
            className="hamburger_menu"
            onClick={() => setIsMobile(!isMobile)}
          />
        </div>
        {isMobile ? (
          <div className="mobile_nav">
            <ul>
              <li>Početna</li>
              <li>Usluge</li>
              <li>O nama</li>
              <li>Kontakt</li>
              <a href="tel:+063999999">
                <p className="nav_lower_call">(+381) 63 999 999</p>
              </a>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default navbar;
