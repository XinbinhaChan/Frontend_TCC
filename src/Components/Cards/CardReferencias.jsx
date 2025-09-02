import React from "react";

import ReferenciasPdfIcon from "../../assets/ReferenciasPdfIcon.png";

export function CardReferencias(props) {
  return (
    <div className="bg-fundo-card2 flex items-center flex-col w-31 h-31 rounded-xl shadow-xl md:w-[650px] md:h-[280px]">
      <div className="bg-fundo-card flex justify-center rounded-xl  items-center w-31 h-16.5 md:w-[650px] md:h-[149.93px]">
        <a href={props.download} download={props.arquivo}>
          <img src={ReferenciasPdfIcon} alt="" className=" w-8 h-8" />
        </a>
      </div>
      <div>
        <p className="text-texto-escuro font-texto-normal-mobile text-[8px] w-21 h-7  text-center">
          {props.texto}
        </p>
      </div>
    </div>
  );
}
