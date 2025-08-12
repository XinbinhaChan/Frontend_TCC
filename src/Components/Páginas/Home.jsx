import React from "react";

import HomeRet from "../../assets/HomeRet.png";
import HomeCirc from "../../assets/HomeCirc.png";
import HomeClareador from "../../assets/HomeClareador.png";

import MemoryBot from "../../assets/MemoryBot.png";

export function Home() {
  return (
    <main>


      <div
        className="h-110 relative flex"
        style={{ backgroundImage: `url(${HomeRet})` }}
      >

        <div className="mt-6 ml-1.25"> 
          <h1 className="text-4xl font-h1-mobile font-bold text-texto-branco mb-4.75">

            Memory<strong className="font-h1-mobile text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[rgba(32,162,155,155.100)] via-70% to-[rgba(13,67,61,100)]">Bot</strong>
          </h1>

          <p className="text-xs 
          font-texto-normal-mobile font-semibold font
          text-texto-branco w-49 h-16 text-center">O MemoryBot é um robô assistente que ajuda pessoas com Alzheimer com lembretes, localização de objetos e interação simples por voz.</p>

        </div>

        <div>
          <img
          src={HomeCirc}
          alt="Decorative Circle"
          
          className="right-3 w-55.3125 h-26.7525 mt-45 absolute border-amber-400 border-2"
        />

        <img
          src={HomeClareador}
          alt=""
          className="right-0 w-60 h-25 mt-59 absolute rotate-170 border-2 border-red-400"

        />

        <img
          src={MemoryBot}
          alt="Mobile Memory Bot"
          className="right-5 w-50 h-80 mt-25 absolute drop-shadow-2xl border-2 border-green-400"
        />
        </div>
      </div>
    </main>
  );
}