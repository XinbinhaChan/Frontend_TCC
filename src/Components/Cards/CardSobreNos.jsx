import React from "react";

import CardSobreNosInstagram from "../../assets/CardSobreNosInstagram.png";
import CardSobreNosLinkedin from "../../assets/CardSobreNosLinkedin.png";
import CardSobreNosGithub from "../../assets/CardSobreNosGithub.png";

export function CardSobreNos(props) {
  return (
    <div className="relative bg-fundo-card2 md:w-[555px] md:h-[500px] w-39 h-57 flex flex-col items-center rounded-3xl md:ml-20">

    
      <div className="absolute top-[1px] z-20">
        <img
          src={props.img}
          alt=""
          className="rounded-full w-[216px] h-[212px] border-4 border-white shadow-lg hover:border-sky-200 duration-300"
        />
      </div>

     
      <div className="bg-fundo-card mt-[108px] md:w-[555px] md:h-[446.77px] w-39 h-42 flex flex-col justify-center items-center rounded-3xl pt-28">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="font-texto-normal-mobile text-3xl text-texto-ciano">
            {props.nome}
          </h1>

          <h2 className="font-texto-normal text-xs font-medium line-clamp-2 text-center">
            {props.funcao}
          </h2>
        </div>

        <div className="bg-black w-39 h-0.25 mb-5"></div>

        <div className="flex justify-between items-center gap-7">
          <a href={props.linkInsta}>
            <img
              src={CardSobreNosInstagram}
              alt="Instagram"
              className="bg-gradient-to-r from-[rgba(240,148,51,1)] via-[rgba(230,104,60,1)] via-[rgba(220,39,67,1)] via-[rgba(204,35,102,1)] to-[rgba(188,24,136,1)] rounded-xl shadow-[5px_0_60px_rgba(188,24,136,1)]"
            />
          </a>

          <a href={props.linkLinkedin}>
            <img
              src={CardSobreNosLinkedin}
              alt="LinkedIn"
              className="bg-blue-500 rounded-xs shadow-[0_0_60px_rgba(29,161,242,1)]"
            />
          </a>

          <a href={props.linkGithub}>
            <img
              src={CardSobreNosGithub}
              alt="GitHub"
              className="bg-black rounded-2xl shadow-[0_0_60px_rgba(0,0,0,1)]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}