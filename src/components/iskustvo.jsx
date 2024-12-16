import React from "react";
import handshake from "../assets/handshake_icon.svg";
import clock from "../assets/clock_icon3.svg";
import group from "../assets/group_icon.svg";
import wc from "../assets/wc_icon.svg";

const iskustvo = () => {
  return (
    <div className="iskustvo_wrapper_width">
      <div className="iskustvo_wrapper">
        <div className="iskustvo_wrapper_content">
          <img src={handshake} alt="icon" />
          <div>
            <h1>10+</h1>
            <p>godina poverenja</p>
          </div>
        </div>
        <div className="iskustvo_wrapper_content">
          <img src={group} alt="icon" />
          <div>
            <h1>1000+</h1>
            <p>zadovoljnih klijenata</p>
          </div>
        </div>
        <div className="iskustvo_wrapper_content">
          <img src={clock} alt="icon" className="clock" />
          <div>
            <h1>24/7</h1>
            <p>dostupnost i podrška</p>
          </div>
        </div>
        <div className="iskustvo_wrapper_content">
          <img src={wc} alt="icon" />
          <div>
            <h1>5+</h1>
            <p>različitih modela toaleta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default iskustvo;
