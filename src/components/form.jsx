import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";

const form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8r93trb", // Replace with your service ID
        "template_lrqqun4", // Replace with your template ID
        e.target,
        "6gyiy4jF_EXII9KKF" // Replace with your user ID
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            tel: "",
            email: "",
            message: "",
          });
          alert("Poruka uspešno poslata!");
        },
        (error) => {
          alert("Došlo je do greške, molimo pokušajte ponovo kasnije.");
        }
      );
  };

  return (
    <div className="form_bg" ref={ref}>
      <div className="form_wrapper">
        <div>
          <h2>Kontaktirajte naš</h2>
          <p>Za sve informacije ili pomoć, slobodno nas kontaktirajte.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ime"
              required
            />
            <input
              type="text"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Broj telefona"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Poruka"
              required
            ></textarea>
            <button type="submit">Pošalji poruku</button>
          </form>
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.8593124344933!2d19.899546464324118!3d45.40726783360644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b3db6ec779bb7%3A0x5891adb11f5ec94e!2sTepih%20Servis%20Clear%20Eko%20Sistem!5e0!3m2!1shu!2srs!4v1734783065083!5m2!1shu!2srs"></iframe>
        </div>
      </div>
    </div>
  );
});

export default form;
