import React from "react";

import { ButtonJogar } from "../Buttons/ButtonJogar";

import GameBg1 from "../../assets/GameBg1.png";

export function Game() {
  return (
    <main className="">
      <section className="w-max h-62.5 " style={{ backgroundImage: `url(${GameBg1})` }}>
        <h1 className="text-texto-azul text-3xl font-bold">MemoryBot</h1>
        <h2>História</h2>
        <p>
          Em um mundo pós-apocalíptico, Plínio e sua fábrica decidiram dominar o
          que restou da Terra. Você tentou impedi-lo. Mas falhou. Agora está
          preso… sem memórias… e com o mundo à beira do colapso. Recupere suas
          memórias. Enfrente Plínio. E salve o mundo.
        </p>
      </section>
      <section>
        <img src="" alt="" className="border-2" />
        <h2>Demo</h2>
        <ButtonJogar />
      </section>
    </main>
  );
}
