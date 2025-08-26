import React, { useState } from "react";

import HomeIcon1 from "../../assets/HomeIcon1.png";
import HomeIcon2 from "../../assets/HomeIcon2.png";
import HomeIcon3 from "../../assets/HomeIcon3.png";

import HomeIcon1Desktop from "../../assets/HomeIcon1Desktop.png";
import HomeIcon2Desktop from "../../assets/HomeIcon2Desktop.png";
import HomeIcon3Desktop from "../../assets/HomeIcon3Desktop.png";

export default function IconsHome() {
  const [mouse, setMouse] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center gap-7 md:gap-[187px]">
      <div
        class={`bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-1 ${
          mouse ? "transform -translate-x-20 " : ""
        }`}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div class="bg-white rounded-full p-2">
          <img src={HomeIcon1} alt="" className="w-20 h-20 md:hidden" />

          <img
            src={HomeIcon1Desktop}
            alt=""
            className="md:w-50 md:h-50 hidden md:block "
          />
        </div>

        <div
          className={`
            absolute left-30 top-0
            transition-all duration-300 ease-in-out

            ${
              mouse
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 translate-x-4 invisible"
            }
          `}
        >
          <h1 className="">Diferencial</h1>

          <p className="text-left font-texto-normal text-[10px] h-10 w-50 md:w-[570px]  md:text-[30px]">
            Nos destacamos por oferecer soluções simples, humanas e adaptadas à
            realidade dos cuidadores, com foco na autonomia do idoso, prevenção
            de riscos e apoio emocional a quem cuida.
          </p>
        </div>
      </div>

      <div
        class={`bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-1 ${
          mouse ? "transform -translate-x-20" : ""
        }`}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div class="bg-white rounded-full p-2">
          <img src={HomeIcon2} alt="" className="w-20 h-20 md:hidden" />

          <img
            src={HomeIcon2Desktop}
            alt=""
            className="md:w-50 md:h-50 hidden md:block "
          />
        </div>

        <div
          className={`
            absolute left-30 top-0
            transition-all duration-300 ease-in-out
            
            ${
              mouse
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 translate-x-4 invisible"
            }
          `}
        >
          <h1 className="">Objetivo</h1>

          <p className="text-left font-texto-normal text-[10px] h-10 w-50 md:w-[570px] md:text-[30px]">
            Facilitar o dia a dia de cuidadores e profissionais da saúde,
            oferecendo orientações práticas e acessíveis para melhorar o
            cuidado, garantir segurança e promover o bem-estar dos idosos.
          </p>
        </div>
      </div>

      <div
        class={`bg-gradient-to-r from-gradiente-icons1 to-gradiente-icons2 rounded-full p-1 ${
          mouse ? "transform -translate-x-20" : ""
        }`}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div class="bg-white rounded-full p-2">
          <img src={HomeIcon3} alt="" className="w-20 h-20 md:hidden" />

          <img
            src={HomeIcon3Desktop}
            alt=""
            className="md:w-50 md:h-50 hidden md:block "
          />

        </div>

        <div
          className={`
            absolute left-30 top-0
            transition-all duration-300 ease-in-out
            ${
              mouse
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 translate-x-4 invisible"
            }
          `}
        >
          <h1 className="">Público-Alvo</h1>

          <p className="text-left font-texto-normal text-[10px] h-10 w-50 md:w-[570px]  md:text-[30px]">
            Nosso projeto é voltado para idosos com algum grau de dependência,
            como os que convivem com doenças neurodegenerativas ou limitações
            físicas, além de idosos que vivem sozinhos e estão mais vulneráveis.
          </p>
        </div>
      </div>
    </div>
  );
}
