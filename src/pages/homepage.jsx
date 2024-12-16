import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Iskustvo from "../components/iskustvo";
import Onama from "../components/onama";
import Footer from "../components/footer";
import Form from "../components/form";
const homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Iskustvo />
      <Onama />
      <Form />
      <Footer />
    </div>
  );
};

export default homepage;
