import React from "react";
import Logo from "../assets/simons_logo_cropped.png";
import fb from "../assets/fb_white.svg";
import insta from "../assets/insta_white.svg";
import email from "../assets/email_white2.svg";
import { Link } from "react-router-dom";

const footer = ({ scrollToForm, scrollToSection1, scrollToSection2 }) => {
  return (
    <>
      <div className="footer_upper_bg">
        <div className="footer_upper">
          <div>
            <h2>Dozvolite nam da vam pokažemo kako pravimo razliku</h2>
            <p>
              Visok kvalitet, brz i prijateljski servis. Kontaktirajte naš za
              sve vaše potrebe za iznajmljivanjem mobilni toaleti.
            </p>
          </div>
          <button>
            <Link onClick={scrollToForm}>Kontaktirajte naš</Link>
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer_wrapper">
          <div className="footer_wrapper_content">
            <img src={Logo} alt="" className="footer_logo" />
            <p>
              Ponosno pružamo usluge širom regiona,<br></br> obezbeđujući
              higijenu i udobnost za svaki događaj.
            </p>
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
          <div className="footer_links">
            <h2>Linkovi</h2>
            <ul>
              <li onClick={scrollToSection2}>
                <Link>Usluge</Link>
              </li>
              <li onClick={scrollToSection1}>
                <Link>O nama</Link>
              </li>
              <li onClick={scrollToForm}>
                <Link>Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="footer_kontakt">
            <h2>Kontakt</h2>
            <a href="tel:+063999999">
              <p>063 999 999</p>
            </a>
            <a href="mailto:simons@gmail.com">
              <p>simons@gmail.com</p>
            </a>
            <Link className="footer_poruku" onClick={scrollToForm}>
              <p>Pošalji poruku</p>
            </Link>
          </div>
        </div>
        <p className="copyright">
          © 2024 Simons Mobilni Toaleti. Sva prava zadržana.
        </p>
      </div>
    </>
  );
};

export default footer;
