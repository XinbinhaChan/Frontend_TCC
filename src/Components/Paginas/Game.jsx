import React from "react";

import { ButtonJogar } from "../Buttons/ButtonJogar";

import GameBg1 from "../../assets/GameBg1.png";
import GameBg2 from "../../assets/GameBg2.png";

export function Game() {
  return (
    <main className="">
      <section
        className="w-screen h-62.5 md:hidden"
        style={{ backgroundImage: `url(${GameBg1})` }}
      >
        <h1 className="text-texto-azul text-3xl font-bold font-game mb-2">
          MemoryBot
        </h1>
        <div>
          <h2 className="text-texto-branco text-2xl font-bold font-game">
          História
        </h2>
        <p className="text-texto-branco text-[10px] font-game break-words w-55">
          Em um mundo pós-apocalíptico, Plínio e sua fábrica decidiram dominar o
          que restou da Terra. Você tentou impedi-lo. Mas falhou. Agora está
          preso… sem memórias… e com o mundo à beira do colapso. Recupere suas
          memórias. Enfrente Plínio. E salve o mundo.
        </p>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${GameBg2})`}}
        className="w-screen h-93.75 flex flex-col items-center justify-center md:hidden"
      >
        <img src="" alt="" className="border-2 w-37.5 h-22" />
        <h2 className="text-texto-branco text-xl font-bold font-game mb-9">Demo</h2>
        <ButtonJogar />
      </section>


       <section
        className="w-screen h-62.5 md:hidden"
        style={{ backgroundImage: `url(${GameBg1})` }}
      >
        <h1 className="text-texto-azul text-3xl font-bold font-game mb-2">
          MemoryBot
        </h1>
        <div>
          <h2 className="text-texto-branco text-2xl font-bold font-game">
          História
        </h2>
        <p className="text-texto-branco text-[10px] font-game break-words w-55">
          Em um mundo pós-apocalíptico, Plínio e sua fábrica decidiram dominar o
          que restou da Terra. Você tentou impedi-lo. Mas falhou. Agora está
          preso… sem memórias… e com o mundo à beira do colapso. Recupere suas
          memórias. Enfrente Plínio. E salve o mundo.
        </p>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${GameBg2})`}}
        className="w-screen h-93.75 flex-col items-center justify-center hidden md:flex"
      >
        <img src="" alt="" className="border-2 w-37.5 h-22" />
        <h2 className="text-texto-branco text-xl font-bold font-game mb-9">Demo</h2>
        <ButtonJogar />
      </section>
    </main>


  );
}
