import React from "react";

import CardSobreNosInstagram from "../../assets/CardSobreNosInstagram.png";
import CardSobreNosLinkedin from "../../assets/CardSobreNosLinkedin.png";
import CardSobreNosGithub from "../../assets/CardSobreNosGithub.png";

export function CardSobreNos(props) {
  return (
    <div className="bg-fundo-card2 md:w-[555px] md:h-[609px] w-39 h-57 flex flex-col justify-center items-center rounded-3xl">
      <img src={props.img} alt="" className=" rounded-full w-15 h-15" />
      <div className="bg-fundo-card  md:w-[555px] md:h-[446.77px] w-39 h-42 flex flex-col justify-center items-center rounded-3xl">
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
              alt=""
              className="bg-gradient-to-r from-[rgba(240,148,51.100)] via-[rgba(230,104,60,100)] via-[rgba(220,39,67,100)] via-[rgba(204,35,102,100)] to-[rgba(188,24,136,100)] rounded-xl shadow-[5px_0_60px_rgba(188,24,136,100)]"
            />
          </a>

          <a href={props.linkLinkedin}>
            <img
              src={CardSobreNosLinkedin}
              alt=""
              className="bg-blue-500 rounded-xs shadow-[0_0_60px_rgba(29,161,242,100)]"
            />
          </a>

          <a href={props.linkGithub}>
            <img
              src={CardSobreNosGithub}
              alt=""
              className="bg-black rounded-2xl shadow-[0_0_60px_rgba(0,0,0,100)]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
