import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Iskustvo from "../components/iskustvo";
import Onama from "../components/onama";
import Footer from "../components/footer";
import Cards from "../components/cards";

const homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Iskustvo />
      <Onama />
      <Cards />
      <Footer />
    </div>
  );
};

export default homepage;
