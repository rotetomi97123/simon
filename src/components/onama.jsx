import React from "react";

const onama = () => {
  return (
    <div className="onama_wrapper_bg">
      <div className="onama_wrapper">
        <div className="onama_wrapper_content">
          <h1>Simons Mobilni toaleti - iznajmljivanje i održavanje</h1>
          <p>
            Dobrodošli na Simons Mobilni Toaleti - lidera u iznajmljivanju i
            održavanju mobilnih toaleta!
          </p>
          <button>Više o nama</button>
        </div>
        <div className="gallery">
          <div className="gallery-item">
            <img
              src="https://i.ibb.co/Cbncqft/istockphoto-1207470300-612x612.jpg"
              alt="Gallery Image 1"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://i.ibb.co/hYz00tN/istockphoto-147063714-612x612.jpg"
              alt="Gallery Image 2"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://i.ibb.co/t8FF5Vn/istockphoto-1007970922-612x612.jpg"
              alt="Gallery Image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default onama;
