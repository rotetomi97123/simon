import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const hero = ({ scrollToSection2 }) => {
  return (
    <div className="hero_bg">
      <div className="hero">
        <h1>
          Čiste i potpuno opremljene mobilne toalete <br></br> za iznajmljivanje
        </h1>

        <p>Zakažite mobilnih toaleta već danas</p>
        <button onClick={scrollToSection2}>Naše usloge</button>
      </div>
    </div>
  );
};

export default hero;
