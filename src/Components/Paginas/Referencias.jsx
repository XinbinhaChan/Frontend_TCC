import React from "react";

import { CardReferencias } from "../Cards/CardReferencias";

import ReferenciasWave1 from "../../assets/ReferenciasWave1.png";

export function Referencias() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div
        className="w-screen h-60 z-[-1] absolute pt-50 mt-36 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${ReferenciasWave1})` }}
      >
        <h1 className="text-texto-escuro text-[40px] font-texto-normal-mobile font-bold mb-">
          Referências
        </h1>

        <div className="">
          <CardReferencias texto="Doença de Alzheimer (Rev Bras Bisig Jadr)" />
        </div>
      </div>
    </main>
  );
}
