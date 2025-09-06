import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import HomeIcon1 from "../../assets/HomeIcon1.png";
import HomeIcon2 from "../../assets/HomeIcon2.png";
import HomeIcon3 from "../../assets/HomeIcon3.png";

import HomeIcon1Desktop from "../../assets/HomeIcon1Desktop.png";
import HomeIcon2Desktop from "../../assets/HomeIcon2Desktop.png";
import HomeIcon3Desktop from "../../assets/HomeIcon3Desktop.png";

export default function IconsHome() {
  const [mouse, setMouse] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-7 md:gap-[187px]">
      {/* Ícone 1 */}
      <div
        data-aos="fade-down"
        // className="bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-1"
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            mouse ? "-translate-x-20 md:-translate-x-50" : ""
          }`}
        >
          <div className="bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-[4px]">
            <div className="bg-white rounded-full p-2">
              <img src={HomeIcon1} alt="" className="w-20 h-20 md:hidden" />
              <img
                src={HomeIcon1Desktop}
                alt=""
                className="md:w-50 md:h-50 hidden md:block"
              />
            </div>
          </div>

          <div
            className={`absolute left-30 top-0 transition-all duration-300 ease-in-out md:left-70 ${
              mouse
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 translate-x-4 invisible"
            }`}
          >
            <h1 className="md:text-[40px]">Diferencial</h1>
            <p className="text-left font-texto-normal text-[10px] h-10 w-50 md:w-[570px] md:text-2xl">
              Nos destacamos por oferecer soluções simples, humanas e adaptadas
              à realidade dos cuidadores, com foco na autonomia do idoso,
              prevenção de riscos e apoio emocional a quem cuida.
            </p>
          </div>
        </div>
      </div>

      {/* Ícone 2 */}
      <div
        data-aos="fade-right"
        // className="bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-1"
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            mouse ? "-translate-x-20 md:-translate-x-50" : ""
          }`}
        >
          <div className="bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-[4px]">
            <div className="bg-white rounded-full p-2">
              <img src={HomeIcon2} alt="" className="w-20 h-20 md:hidden" />
              <img
                src={HomeIcon2Desktop}
                alt=""
                className="md:w-50 md:h-50 hidden md:block"
              />
            </div>
          </div>

          <div
            className={`absolute left-30 top-0 transition-all duration-300 ease-in-out md:left-70 ${
              mouse
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 translate-x-4 invisible"
            }`}
          >
            <h1 className="md:text-[40px]">Objetivo</h1>
            <p className="text-left font-texto-normal text-[10px] h-10 w-50 md:w-[570px] md:text-2xl">
              Facilitar o dia a dia de cuidadores e profissionais da saúde,
              oferecendo orientações práticas e acessíveis para melhorar o
              cuidado, garantir segurança e promover o bem-estar dos idosos.
            </p>
          </div>
        </div>
      </div>

      {/* Ícone 3 */}
      {/* Ícone 3 */}
      <div
        data-aos="fade-down"
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            mouse ? "-translate-x-20 md:-translate-x-50" : ""
          }`}
        >
          <div className="bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-[4px]">
            <div className="bg-white rounded-full p-2">
              <img src={HomeIcon3} alt="" className="w-20 h-20 md:hidden" />
              <img
                src={HomeIcon3Desktop}
                alt=""
                className="md:w-50 md:h-50 hidden md:block"
              />
            </div>
          </div>

          <div
            className={`absolute left-30 top-0 transition-all duration-300 ease-in-out md:left-70 ${
              mouse
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 translate-x-4 invisible"
            }`}
          >
            <h1 className="md:text-[40px]">Público-Alvo</h1>
            <p className="text-left font-texto-normal text-[10px] h-10 w-50 md:w-[570px] md:text-2xl">
              Nosso projeto é voltado para idosos com algum grau de dependência,
              como os que convivem com doenças neurodegenerativas ou limitações
              físicas, além de idosos que vivem sozinhos e estão mais
              vulneráveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
