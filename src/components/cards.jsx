import React, { forwardRef } from "react";

const cards = forwardRef((props, ref) => {
  const { scrollToForm } = props;
  const cards = [
    {
      title: "Iznajmljivanje mobilnih toaleta",
      description:
        "Nudimo više od 5 različitih mobilnih toaleta, raspoređenih u 3 kategorije.",
      image: "https://i.ibb.co/QbwKzyq/card3.jpg",
    },
    {
      title: "Kompletan servis",
      description:
        "Za duži najam, naša firma pruža kompletan servis svih mobilnih toaleta iz naše ponude.",
      image: "https://i.ibb.co/ZNkScsz/card2.jpg",
    },
    {
      title: "Garancija kvaliteta",
      description:
        "Sa preko 8 godina iskustva i hiljadama zadovoljnih klijenata, garantujemo sigurnost i kvalitet.",
      image: "https://i.ibb.co/mRMfRWP/card1.jpg",
    },
  ];

  return (
    <div className="cards_bg" ref={ref}>
      {" "}
      <div className="cards-section">
        <h2>Naše usluge</h2>
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div
              className={`card ${index === 1 ? "card-large" : ""}`} // Make the middle card larger
              key={index}
            >
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button onClick={scrollToForm}>Saznajte više</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default cards;
