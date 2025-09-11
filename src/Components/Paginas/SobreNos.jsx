import React from "react";

import { CardSobreNos } from "../Cards/CardSobreNos";

import SobreNosWave1 from "../../assets/SobreNosWave1.png";
import SobreNosWave1Desktop from "../../assets/SobreNosWave1Desktop.png";
import SobreNosWave2Desktop from "../../assets/SobreNosWave2Desktop.png";

import Rafael from "../../assets/Rafael.jpg";
import Navarro from "../../assets/Navarro.jpg";
import Vidal from "../../assets/Vidal.jpg";
import Maximiano from "../../assets/Maximiano.jpg";



export function SobreNos() {
  return (
    <div className="dark:bg-dark-background">
      <div className="pl-7 mb-5">
       
        <div className="md:hidden">
          <img src={SobreNosWave1} alt="" />
          <h1 className="text-4xl font-bold font-h1-mobile text-black mt-4 dark:text-texto-branco">
            Sobre Nós
          </h1>
          <p className="text-xs font-texto-normal-mobile mt-2 text-black dark:text-texto-branco">
            Informações dos criadores do{" "}
            <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
              MemoryBot
            </strong>
          </p>
        </div>

       
        <div className="relative w-full hidden md:block">
          <img
            src={SobreNosWave1Desktop}
            alt=""
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 z-10">
            <h1 className="text-9xl font-bold font-h1-mobile text-black dark:text-texto-branco">
              Sobre Nós
            </h1>
            <p className="text-lg font-texto-normal-mobile mt-2 text-black dark:text-texto-branco">
              Informações dos criadores do{" "}
              <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-600 to-green-900">
                MemoryBot
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <CardSobreNos
          img={Rafael}
          nome="Rafael"
          funcao="Líder e Desenvolvedor do jogo e site"
          linkGithub="https://github.com/RafaelLfckkj"
          linkLinkedin="https://www.linkedin.com/in/rafaolivedev/"
          linkInsta="https://www.instagram.com/rafaellfckkj/"
        />

        <CardSobreNos
          img={Maximiano}
          nome="Maximiano"
          funcao="Designer e Desenvolvedor do site"
          linkGithub="https://github.com/XinbinhaChan"
          linkLinkedin="https://www.linkedin.com/in/matheus-maximiano-bb5bbb305/"
          linkInsta="https://www.instagram.com/xinbinha_chan17/profilecard/?igsh=MXZuejdlM2Exb3E3NQ=="
        />

        <CardSobreNos
          img={Navarro}
          nome="Navarro"
          funcao="Designer e Desenvolvedor do projeto"
          linkGithub="https://github.com/matheusnw1"
          linkLinkedin="https://www.linkedin.com/in/matheus-navarro-wenceslau-1418b7335/"
          linkInsta="https://www.instagram.com/matheus.nww/"
        />

        <CardSobreNos
          img={Vidal}
          nome="Yago"
          funcao="Desenvolvedor principal do projeto e do jogo"
          linkGithub="https://github.com/YagoVid"
          linkLinkedin="https://www.linkedin.com/in/yago-vidal-oliveira-de-almeida-449883304/"
          linkInsta="https://www.instagram.com/yagovidar/"
        />
      </div>

      <img src={SobreNosWave2Desktop} alt="" className="hidden md:block" />
    </div>
  );
}
