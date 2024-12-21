import React, { useEffect, useState } from "react";
import Logo from "../assets/simons_logo_cropped.png";
import fb from "../assets/fb2.svg";
import insta from "../assets/insta_final.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone2.svg";
import hamburger from "../assets/hamburger_white.svg";
import close from "../assets/close.svg";
import phone_white from "../assets/phone_white.svg";
const navbar = ({ scrollToForm, scrollToSection1, scrollToSection2 }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isActive, setIsActive] = useState("pocetna");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobile(false);
      }
      if (window.innerWidth < 768) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
      <div
        className="nav_lower_position"
        style={{
          top: isMobile ? "209px" : "88px",
          marginTop: isSmall ? "50px" : "0",
        }}
      >
        <div className="nav_lower">
          <div className="nav_lower_flex">
            <img src={Logo} alt="logo" />
            <div className="nav_lower_flex2">
              <ul>
                <li>
                  <p className="hover-text" onClick={scrollToSection2}>
                    Usluge
                  </p>
                  {isActive == "second" ? <div /> : ""}
                </li>
                <li>
                  <p className="hover-text" onClick={scrollToSection1}>
                    O nama
                  </p>
                  {isActive == "third" ? <div /> : ""}
                </li>
                <li>
                  <p className="hover-text" onClick={scrollToForm}>
                    Kontakt
                  </p>
                  {isActive == "fourth" ? <div /> : ""}
                </li>
              </ul>
              <a href="tel:+063999999" className="nav_lower_call">
                <img src={phone_white} alt="phone" />
                <p>Pozovite naš</p>
              </a>
            </div>
            <img
              src={isOpen ? close : hamburger}
              alt="menu"
              className="hamburger_menu"
              onClick={() => (setIsMobile(!isMobile), setIsOpen(!isOpen))}
            />
          </div>
        </div>
        {isMobile ? (
          <div className="mobile_nav">
            <ul>
              <li
                style={{ color: "white" }}
                onClick={() => {
                  scrollToSection2(); // Scroll down to section
                  setIsMobile(!isMobile); // Toggle mobile state
                  setIsOpen(!isOpen); // Toggle menu state
                }}
              >
                Usluge
              </li>
              <li
                style={{ color: "white" }}
                onClick={() => {
                  scrollToSection1(); // Scroll down to section
                  setIsMobile(!isMobile); // Toggle mobile state
                  setIsOpen(!isOpen); // Toggle menu state
                }}
              >
                O nama
              </li>
              <li
                style={{ color: "white" }}
                onClick={() => {
                  scrollToForm(); // Scroll down to section
                  setIsMobile(!isMobile); // Toggle mobile state
                  setIsOpen(!isOpen); // Toggle menu state
                }}
              >
                Kontakt
              </li>
              <a href="tel:+063999999" className="nav_lower_call">
                <img src={phone_white} alt="phone" />
                <p>Pozovite naš</p>
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
