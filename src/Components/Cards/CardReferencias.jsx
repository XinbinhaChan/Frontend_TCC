import React from "react";

import ReferenciasPdfIcon from "../../assets/ReferenciasPdfIcon.png";
import ReferenciasPdfIconDesktop from "../../assets/ReferenciasPdfIconDesktop.png";

export function CardReferencias(props) {
  return (
    <div className="bg-fundo-card2 dark:bg-nav-claro flex items-center flex-col w-31 h-31 rounded-xl shadow-xl md:w-[650px] md:h-[280px] md:ml-[-5px] ">
      <div className="bg-fundo-card dark:bg-dark-nav flex justify-center rounded-xl  items-center w-31 h-16.5 md:w-[650px] md:h-[149.93px]">

        <a href={props.download} download={props.arquivo} className="md:hidden">
          <img src={ReferenciasPdfIcon}  alt="" className=" w-8 h-8 md:w-[85px] md:h-[85px] " />
        </a>
        <a href={props.download} download={props.arquivo} className="hidden md:block">
          <img src={ReferenciasPdfIconDesktop}  alt="" className=" w-8 h-8 md:w-[85px] md:h-[85px] " />
        </a>
      </div>
      <div>
        <p className="text-texto-escuro font-texto-normal-mobile text-[8px] w-21 h-7  text-center md:text-[30px] md:w-[650px] md:h-[72px] dark:text-texto-branco">
          {props.texto}
        </p>
      </div>
    </div>
  );
}
