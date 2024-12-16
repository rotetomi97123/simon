import React from "react";

const form = () => {
  return (
    <div className="form_wrapper">
      <div class="form-container">
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
        <div class="form-card">
          <h1>Kontaktirajte nas</h1>
          <p>
            Imate pitanje? Ispunite obrazac ispod i ubrzo ćemo vam se javiti!
          </p>
          <form action="#" method="POST">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Unesite vaše ime"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Unesite vašu email adresu"
              required
            />

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Unesite vašu poruku..."
              required
            ></textarea>

            <button type="submit">Pošaljite</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default form;
