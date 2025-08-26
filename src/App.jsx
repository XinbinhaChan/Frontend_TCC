import React from "react";
import { Routes, Route } from "react-router-dom";

import { Nav } from "./Components/Nav/Nav.jsx";
import { Home } from "./Components/Paginas/Home.jsx";
import { Produtos } from "./Components/Paginas/Produtos.jsx";
import { SobreNos } from "./Components/Paginas/SobreNos.jsx";

export function App() {
  return (
    <div className="gap-5">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/referencia" element={<SobreNos />} />
        <Route path="/instrucao" element={<SobreNos />} />
      </Routes>
    </div>
  );
}
