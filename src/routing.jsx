import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Usluge from "./pages/usluge";
import Onama from "./pages/onama";
import Kontakt from "./pages/kontakt";

const routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </div>
  );
};

export default routing;
