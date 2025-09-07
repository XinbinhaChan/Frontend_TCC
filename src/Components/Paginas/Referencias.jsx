import React from "react";

import { CardReferencias } from "../Cards/CardReferencias";

import ReferenciasWave1 from "../../assets/ReferenciasWave1.png";
import ReferenciasWave2 from "../../assets/ReferenciasWave2.png";

const DA = "/downloads/DA.pdf";
const DAMA = "/downloads/DAMA.pdf";
const FF = "/downloads/FF.pdf";
const RC = "/downloads/RC.pdf";

export function Referencias() {
  return (
    <main className="flex flex-col justify-center items-center dark:bg-dark-background">
      <div
        className="w-90 h-65 z-[-1] absolute left-0 pt-50 mt-36 flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${ReferenciasWave1})` }}
      >
        <h1 className="text-texto-escuro text-[40px] font-texto-normal-mobile font-bold mt-120 mb-8 md:text-center md:mb-20 md:mt-150 dark:text-texto-branco">
          Referências
        </h1>

        <div className=" justify-center items-center grid grid-cols-2 gap-15 md:gap-[80px] md:w-[1347px] md:h-[649px] ">
          <CardReferencias texto="Doença de Alzheimer (Rev Bras Bisig Jadr)" download={DA} arquivo="Doença_de_Alzheimer.pdf"/>

          <CardReferencias texto="Reabilitação Cognitiva em Pacientes com Doença de Alzheimer (Arq Neuropsiquiatr)" download={RC} arquivo="Reabilitação_Cognitiva.pdf"/>

          <CardReferencias texto="A Doença de Alzheimer: Aspectos Fisiopatológicos e Farmacológicos (Rev Psiquiatr RS)" download={FF} arquivo="Fisiopatológicos_Farmacológicos.pdf"/>

          <CardReferencias texto="Demência de Alzheimer: Correlação entre Memória e Autonomia (Rev Psig Clin)" download={DAMA} arquivo="Demencia_de_Alzheimer.pdf"/>
        </div>

        <img src={ReferenciasWave2} alt="" className="w-screen h-65 ml-10 md:hidden"/>
      </div>
      
    </main>
  );
}
