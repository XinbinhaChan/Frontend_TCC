import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import HomeRet from "../../assets/HomeRet.png";
import HomeCirc from "../../assets/HomeCirc.png";
import HomeCircDark from "../../assets/HomeCircDark.png";
import HomeClareador from "../../assets/HomeClareador.png";
import HomeClareadorDark from "../../assets/HomeClareadorDark.png";
import HomeAppRet from "../../assets/HomeAppRet.png";
import HomeAppCel from "../../assets/HomeAppCel.png";
import HomeGameWave from "../../assets/HomeGameWave.png";
import HomeGameWaveDesktop from "../../assets/HomeGameWaveDesktop.png";
import HomeGameBg from "../../assets/HomeGameBg.png";
import HomeGameBgDesktop from "../../assets/HomeGameBgDesktop.png";
import HomeRetDesktop from "../../assets/HomeRetDesktop.png";
import HomeAppRetDesktop from "../../assets/HomeAppRetDesktop.png";
import HomeAppCelDesktop from "../../assets/HomeAppCelDesktop.png";

import MemoryBot from "../../assets/MemoryBot.png";

import { ButtonInstrucoes } from "../Buttons/ButtonInstrucoes.jsx";
import { ButtonDownload } from "../Buttons/ButtonDownload.jsx";
import { ButtonGame } from "../Buttons/ButtonGame.jsx";

import IconsHome from "../Icons/IconsHome";

export function Home() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [isAOSReady, setIsAOSReady] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setBackgroundImage(isDesktop ? HomeRetDesktop : HomeRet);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      delay: 100,
    });

    setIsAOSReady(true);

    
    const handleLoad = () => AOS.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      AOS.refreshHard();
    };
  }, []);

  if (!backgroundImage || !isAOSReady) return null;

  return (
    <main className="overflow-x-hidden dark:bg-dark-background">
      <section
        className="h-110 w-screen relative flex md:h-250 2xl:h-310 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-6 ml-1.25">
          <h1 className="text-4xl font-h1-mobile font-bold text-texto-branco mb-4.75 mt-10 md:text-8xl md:mt-[87px] md:ml-[84px] dark:text-black">
            Memory
            <strong className="md:text-8xl font-h1-mobile text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[rgba(32,162,155,155.100)] via-70% to-[rgba(13,67,61,100)]">
              Bot
            </strong>
          </h1>

          <p
            className="text-xs 
          font-texto-normal-mobile font-semibold font
          text-texto-branco w-49 h-16 text-center md:text-3xl md:w-[652px] md:mr-8 2xl:mt-10 dark:text-black"
          >
            O MemoryBot é um robô assistente que ajuda pessoas com Alzheimer com
            lembretes, localização de objetos e interação simples por voz.
          </p>
        </div>

        <div className="mb-20">
          <img
            src={HomeCirc}
            alt="Decorative Circle"
            className="dark:hidden right-3 w-55.3125 h-26.7525 mt-45 absolute md:w-[713.68px] md:mt-50.5 2xl:mt-76"
          />

          <img
            src={HomeCircDark}
            alt="Decorative Circle"
            className="hidden dark:block right-3 w-55.3125 h-26.7525 mt-45 absolute md:w-[713.68px] md:mt-50.5 2xl:mt-76"
          />

          <img
            src={HomeClareador}
            alt=""
            className="dark:hidden right-0 left-32 w-65 h-25 mt-59 absolute rotate-170 md:hidden"
          />

          <img
            src={HomeClareadorDark}
            alt=""
            className="hidden dark:block right-0 left-32 w-65 h-25 mt-59 absolute rotate-170 md:hidden"
          />



          <img
            src={MemoryBot}
            alt="Mobile Memory Bot"
            className="right-5 w-50 h-80 mt-25 absolute drop-shadow-2xl md:w-[526px] md:h-[810px] md:mt-35 md:mr-10 2xl:w-[550px] 2xl:h-[850px]"
          />
        </div>
      </section>

      <div className="flex justify-center mb-24 md:absolute md:top-110 md:left-50 2xl:top-130">
        <Link to="/instrucao">
          <ButtonInstrucoes />
        </Link>
      </div>

      <section className="mb-20"  >
        <IconsHome />
      </section>

      <section className="mb-15">
        <div className="flex justify-center" data-aos="fade-up">
          <h1 className="font-h1-mobile text-4xl font-bold md:text-6xl dark:text-texto-azul  bg-clip-text text-transparent bg-gradient-to-r from-[rgba(32,162,155,155.100)] via-70% to-[rgba(13,67,61,100)]">
            Aplicativo
          </h1>
        </div>

        {/* Mobile */}

        <div
          className="h-87 w-screen flex justify-between  md:hidden bg-cover"
          style={{ backgroundImage: `url(${HomeAppRet})` }}
        >
          <div className="ml-2.5 w-35 h-12 mt-20  md:hidden ">
            <h2
              className="font-h1-mobile text-xs font-bold text-texto-branco dark:text-black"
              data-aos="fade-right"

            >
              Controle e Acompanhamento na Palma da Mão
            </h2>
          </div>

          <div
            className="w-screen h-88.5 mt-10 block md:hidden "
            data-aos="fade-left"
          >
            <img src={HomeAppCel} alt="App Memory Bot" className="" />
          </div>
        </div>

        {/* Pc */}

        <div
          className="md:h-250 w-screen  justify-between hidden md:block bg-cover 2xl:h-330"
          style={{ backgroundImage: `url(${HomeAppRetDesktop})` }}
        >
          <div
            className="ml-[75px] h-12 mt-20 hidden md:flex "
            data-aos="fade-up"
          >
            <h2 className="font-h1-mobile text-left text-4xl mt-75 font-bold text-texto-branco md:w-[528px]">
              <span className="text-texto-ciano">Controle</span> e <br />
              <span className="text-texto-ciano"> Acompanhamento</span> na{" "}
              <br /> Palma da Mão
            </h2>
          </div>

          <div
            className="w-screen h-88.5 ml-220 mt-10 hidden md:block md:w-150 2xl:ml-330 2xl:mt-110"
            data-aos="fade-left"
          >
            <img src={HomeAppCelDesktop} alt="App Memory Bot" className="" />
          </div>

          <div
            className="flex flex-col justify-center items-center gap-7 md:justify-left md:items-center "
            data-aos="fade-up"
          >
            <p className="text-xs md:text-3xl md:w-[592px] md:text-left md:mb-50  md:mr-190 md:mt-50 2xl:mr-290 2xl:mt-[-10px] 2xl:mb-80 font-texto-normal-mobile w-69 h-20 text-texto-ciano text-center mb-5 dark:text-texto-white">
              Gerencie as configurações do MemoryBot, personalize lembretes
              remotamente, acompanhe a rotina do usuário e receba notificações
              importantes diretamente no seu smartphone. Uma interface simples e
              acessível para cuidadores e familiares
            </p>

            <div>
              <ButtonDownload />
            </div>
          </div>
        </div>

        <div
          className="md:hidden flex-col justify-center items-center gap-7"
          data-aos="fade-up"
        >
          <p className="text-xs font-texto-normal-mobile w-69 h-20 text-texto-ciano text-center mb-10 ml-10 dark:text-white">
            Gerencie as configurações do MemoryBot, personalize lembretes
            remotamente, acompanhe a rotina do usuário e receba notificações
            importantes diretamente no seu smartphone. Uma interface simples e
            acessível para cuidadores e familiares
          </p>

          <div className="ml-30">
            <ButtonDownload />
          </div>
        </div>
      </section>

      <section>
        <img src={HomeGameWave} alt="" className="w-screen h-max md:hidden" />
        <img
          src={HomeGameWaveDesktop}
          alt=""
          className="hidden md:block bg-cover w-full "
        />

        <div
          style={{ backgroundImage: `url(${HomeGameBg})` }}
          className="w-screen flex flex-col justify-center items-center gap-39 h-74.5 md:hidden"
        >
          <div>
            <h1 className="font-game text-3xl font-bold text-texto-neon flex justify-center">
              MemoryBot
            </h1>
          </div>

          <div className="flex justify-center">
            <Link to="/game">
              <ButtonGame />
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[1138px] hidden md:block">
          <img
            src={HomeGameBgDesktop}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center " data-aos="fade-down">
            <h1 className="font-game md:text-8xl font-bold text-texto-neon md:mb-[591px]">
              MemoryBot
            </h1>

            <Link to="/game">
              <ButtonGame />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
