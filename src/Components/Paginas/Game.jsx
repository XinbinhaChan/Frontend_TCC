import React, { useEffect } from "react";

import { ButtonJogar } from "../Buttons/ButtonJogar";

import GameBg1 from "../../assets/GameBg1.png";
import GameBg2 from "../../assets/GameBg2.png";
import GameBg1Desktop from "../../assets/GameBg1Desktop.png";
import GameBg2Desktop from "../../assets/GameBg2Desktop.png";

export function Game() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="">
      <section
        className="w-screen h-62.5 md:hidden mt-16"
        style={{ backgroundImage: `url(${GameBg1})` }}
      >
        <h1 className="text-texto-azul text-3xl font-bold font-game mb-2 ">
          MemoryBot
        </h1>
        <div>
          <h2 className="text-texto-branco text-2xl font-bold font-game">
            História
          </h2>
          <p className="text-texto-branco text-[10px] font-game break-words w-55">
            Em um mundo pós-apocalíptico, Plínio e sua fábrica decidiram dominar
            o que restou da Terra. Você tentou impedi-lo. Mas falhou. Agora está
            preso… sem memórias… e com o mundo à beira do colapso. Recupere suas
            memórias. Enfrente Plínio. E salve o mundo.
          </p>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${GameBg2})` }}
        className="w-screen h-93.75 flex flex-col items-center justify-center md:hidden"
      >
        <img src="" alt="" className="border-2 w-37.5 h-22" />
        <h2 className="text-texto-branco text-xl font-bold font-game mb-9">
          Demo
        </h2>
        <ButtonJogar />
      </section>

      <div
        className="w-screen md:h-[960px] hidden md:block  md:bg-cover"
        style={{ backgroundImage: `url(${GameBg1Desktop})` }}
      >
        <br />
        <h1 className="text-texto-azul text-8xl font-bold font-game mb-[40px] text-center md:mt-15 ">
          MemoryBot
        </h1>
        <div>
          <h2 className="text-texto-branco text-7xl font-bold font-game ml-[90px] mb-[47px]">
            História
          </h2>
          <p className="text-texto-branco text-xl font-game break-words w-[452px] ml-[90px]">
            Em um mundo pós-apocalíptico, Plínio e sua fábrica decidiram dominar
            o que restou da Terra. Você tentou impedi-lo. Mas falhou. Agora está
            preso… sem memórias… e com o mundo à beira do colapso. Recupere suas
            memórias. Enfrente Plínio. E salve o mundo.
          </p>
        </div>
      </div>
      <section
        style={{ backgroundImage: `url(${GameBg2Desktop})` }}
        className="w-screen md:h-[1440px] flex-col items-center justify-center hidden md:flex  md:bg-cover"
      >
        <img
          src=""
          alt=""
          className="border-2 w-37.5 h-22 md:w-[367px] md:h-[234px] "
        />
        <h2 className="text-texto-branco text-xl font-bold font-game mb-9 md:text-[75px]">
          Demo
        </h2>
        <ButtonJogar />
      </section>
    </main>
  );
}
