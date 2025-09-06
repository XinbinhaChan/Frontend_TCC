import React from "react";

import CardSobreNosInstagram from "../../assets/CardSobreNosInstagram.png";
import CardSobreNosLinkedin from "../../assets/CardSobreNosLinkedin.png";
import CardSobreNosGithub from "../../assets/CardSobreNosGithub.png";

export function CardSobreNos(props) {
  return (
    <div className="md:relative bg-fundo-card2 md:w-[555px] md:h-[500px] 2xl:ml-50 w-39 h-57 flex flex-col items-center rounded-3xl md:ml-20 mb-20 md:mb-[37px] " data-aos="fade-down">
      <div className="md:absolute md:top-[1px] md:z-20">
        <img
          src={props.img}
          alt=""
          className="rounded-full md:w-[216px] md:h-[212px] md:border-4 md:border-fundo-card2 shadow-lg md:hover:border-fundo-card md:duration-300"
        />
      </div>

      <div className="bg-fundo-card md:mt-[108px] md:w-[555px] md:h-[446.77px] w-39 h-42 flex flex-col justify-center items-center rounded-3xl md:pt-28 ">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="font-texto-normal-mobile text-3xl text-texto-ciano md:text-3xl md:color-">
            {props.nome}
          </h1>

          <h2 className="font-texto-normal text-xs font-medium line-clamp-2 text-center md:text-xl">
            {props.funcao}
          </h2>
        </div>

        <div className="bg-black w-39 h-0.25 mb-5"></div>

        <div className="flex justify-between items-center gap-7">
          <a
            href={props.linkInsta}
            className="bg-gradient-to-r from-[rgba(240,148,51,1)] via-[rgba(230,104,60,1)] via-[rgba(220,39,67,1)] via-[rgba(204,35,102,1)] to-[rgba(188,24,136,1)] rounded-xl shadow-[5px_0_60px_rgba(188,24,136,1)] md:w-[50px] md:flex md:justify-center md:items-center md:h-[50px] md:hover:w-[55px] md:hover:h-[55px] md:duration-200"
          >
            <img src={CardSobreNosInstagram} alt="Instagram" />
          </a>

          <a
            href={props.linkLinkedin}
            className="bg-blue-500 rounded-xs shadow-[0_0_60px_rgba(29,161,242,1)] md:w-[50px] md:flex md:justify-center md:items-center md:h-[50px] md:rounded-xl md:hover:w-[55px] md:hover:h-[55px] md:duration-200"
          >
            <img src={CardSobreNosLinkedin} alt="LinkedIn" />
          </a>

          <a
            href={props.linkGithub}
            className="bg-black rounded-2xl shadow-[0_0_60px_rgba(0,0,0,1)] md:w-[50px] md:flex md:justify-center md:items-center md:h-[50px] md:hover:w-[55px] md:hover:h-[55px] md:duration-200"
          >
            <img src={CardSobreNosGithub} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}
