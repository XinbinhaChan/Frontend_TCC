import React from "react";

import SobreNosWave1 from "../../assets/SobreNosWave1.png";
import { CardSobreNos } from "../Cards/CardSobreNos";

export function SobreNos() {
  return (
    <div>
      <div className="pl-7 mb-5">
        <img src={SobreNosWave1} alt="" className="" />

        <div>
          <h1 className="text-4xl font-bold font-h1-mobile">Sobre Nós</h1>

          <p className="text-xs font-texto-normal-mobile ">
            Informações dos criadores do{" "}
            <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgba(32,162,155,155.100)] via-70% to-[rgba(13,67,61,100)]">
              MemoryBot
            </strong>
          </p>
        </div>
      </div>

      <div >
        <CardSobreNos />
      </div>
    </div>
  );
}
