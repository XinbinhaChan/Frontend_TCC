import React from "react";
import { Routes, Route } from "react-router-dom";

import { Nav } from "./Components/Nav/Nav.jsx";
import { Home } from "./Components/Paginas/Home.jsx";
import { Produtos } from "./Components/Paginas/Produtos.jsx";
import { SobreNos } from "./Components/Paginas/SobreNos.jsx";
import { Referencias } from "./Components/Paginas/Referencias.jsx";
import { Instrucoes } from "./Components/Paginas/Instrucoes.jsx"; 
import { Game } from "./Components/Paginas/Game.jsx";

export function App() {
  return (
    <div className="gap-5">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/referencia" element={<Referencias />} />
        <Route path="/instrucao" element={<Instrucoes />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}