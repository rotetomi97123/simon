import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const hero = () => {
  const params = {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true, // Disable looping
  };
  return (
    <div className="hero_bg">
      <div className="hero">
        <h1>
          Čiste i potpuno opremljene mobilne toalete <br></br> za iznajmljivanje
        </h1>

        <p>Zakažite mobilnih toaleta već danas</p>
        <button>Naše usloge</button>
      </div>
    </div>
  );
};

export default hero;
