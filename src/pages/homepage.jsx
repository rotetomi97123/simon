import React, { useRef } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Iskustvo from "../components/iskustvo";
import Onama from "../components/onama";
import Footer from "../components/footer";
import Cards from "../components/cards";
import Form from "../components/form";

const homepage = () => {
  const formRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToSection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar
        scrollToForm={() => scrollToSection(formRef)}
        scrollToSection1={() => scrollToSection(section1Ref)}
        scrollToSection2={() => scrollToSection(section2Ref)}
      />
      <Hero scrollToSection2={() => scrollToSection(section2Ref)} />
      <Iskustvo />
      <Onama
        ref={section1Ref}
        scrollToSection2={() => scrollToSection(section2Ref)}
      />
      <Cards ref={section2Ref} scrollToForm={() => scrollToSection(formRef)} />
      <Form ref={formRef} />
      <Footer
        scrollToForm={() => scrollToSection(formRef)}
        scrollToSection1={() => scrollToSection(section1Ref)}
        scrollToSection2={() => scrollToSection(section2Ref)}
      />
    </div>
  );
};

export default homepage;
