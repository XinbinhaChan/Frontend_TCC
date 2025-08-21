import React from "react";

import HomeRet from "../../assets/HomeRet.png";
import HomeCirc from "../../assets/HomeCirc.png";
import HomeClareador from "../../assets/HomeClareador.png";
import HomeAppRet from "../../assets/HomeAppRet.png";
import HomeAppCel from "../../assets/HomeAppCel.png";
import HomeGameWave from "../../assets/HomeGameWave.png";
import HomeGameBg from "../../assets/HomeGameBg.png";

import MemoryBot from "../../assets/MemoryBot.png";

import { Instruções } from "../Buttons/Instruções";
import { Download } from "../Buttons/Download";
import { Game } from "../Buttons/Game";

import IconsHome from "../Icons/IconsHome";

export function Home() {
  return (
    <main>
      <section
        className="h-110 w-screen relative flex"
        style={{ backgroundImage: `url(${HomeRet})` }}
      >
        <div className="mt-6 ml-1.25">
          <h1 className="text-4xl font-h1-mobile font-bold text-texto-branco mb-4.75">
            Memory
            <strong className="font-h1-mobile text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[rgba(32,162,155,155.100)] via-70% to-[rgba(13,67,61,100)]">
              Bot
            </strong>
          </h1>

          <p
            className="text-xs 
          font-texto-normal-mobile font-semibold font
          text-texto-branco w-49 h-16 text-center"
          >
            O MemoryBot é um robô assistente que ajuda pessoas com Alzheimer com
            lembretes, localização de objetos e interação simples por voz.
          </p>
        </div>

        <div className="mb-20">
          <img
            src={HomeCirc}
            alt="Decorative Circle"
            className="right-3 w-55.3125 h-26.7525 mt-45 absolute"
          />

          <img
            src={HomeClareador}
            alt=""
            className="right-0 left-32 w-65 h-25 mt-59 absolute rotate-170"
          />

          <img
            src={MemoryBot}
            alt="Mobile Memory Bot"
            className="right-5 w-50 h-80 mt-25 absolute drop-shadow-2xl"
          />
        </div>
      </section>

      <div className="flex justify-center mb-24">
        <Instruções />
      </div>

      <section className="mb-20">
        <IconsHome />
      </section>

      <section className="mb-15">
        <div className="flex justify-center">
          <h1 className="font-h1-mobile text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[rgba(32,162,155,155.100)] via-70% to-[rgba(13,67,61,100)]">
            Aplicativo
          </h1>
        </div>

        <div
          className="h-87 w-screen flex justify-between"
          style={{ backgroundImage: `url(${HomeAppRet})` }}
        >
          <div className="ml-2.5 w-35 h-12 mt-20">
            <h2 className="font-h1-mobile text-xs font-bold text-texto-branco">
              Controle e Acompanhamento na Palma da Mão
            </h2>
          </div>

          <div className="w-screen h-88.5 mt-10">
            <img src={HomeAppCel} alt="App Memory Bot" className="" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-7">
          <p className="text-xs font-texto-normal-mobile font-semibold w-69 h-20 text-texto-ciano text-center mb-5">
            Gerencie as configurações do MemoryBot, personalize lembretes
            remotamente, acompanhe a rotina do usuário e receba notificações
            importantes diretamente no seu smartphone. Uma interface simples e
            acessível para cuidadores e familiares
          </p>

          <div>
            <Download />
          </div>
        </div>
      </section>

      <section>
        <img src={HomeGameWave} alt="" className="w-screen h-max" />

        <div
          style={{ backgroundImage: `url(${HomeGameBg})` }}
          className="w-screen flex flex-col justify-center items-center gap-39 h-74.5"
        >
          <div>
            <h1 className="font-game text-3xl font-bold text-texto-neon flex justify-center">
              MemoryBot
            </h1>
          </div>

          <div className="flex justify-center">
            <Game />
          </div>
        </div>
      </section>
    </main>
  );
}
