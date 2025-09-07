import React, { useState } from "react";

// Quando for começar essa pagina já deixa mt-15 para a nav não ficar bugada :) se prescisar só aumentar
export function Instrucoes() {
  const [Config, SetConfig] = useState(false);
  const [Lembretes, SetLembretes] = useState(false);
  const [UsoDiario, SetUsoDiario] = useState(false);
  const [ConfigDeUso, SetConfigDeUso] = useState(false);
  const [Recurso, SetRecurso] = useState(false);

  function Configuracao() {
    SetConfig(!Config);
    SetLembretes(false);
    SetUsoDiario(false);
    SetConfigDeUso(false);
    SetRecurso(false);
  }

  function Lembrete() {
    SetConfig(false);
    SetLembretes(!Lembretes);
    SetUsoDiario(false);
    SetConfigDeUso(false);
    SetRecurso(false);
  }

  function Usodiario() {
    SetConfig(false);
    SetLembretes(false);
    SetUsoDiario(!UsoDiario);
    SetConfigDeUso(false);
    SetRecurso(false);
  }

  function Configuracaodeus() {
    SetConfig(false);
    SetLembretes(false);
    SetUsoDiario(false);
    SetConfigDeUso(!ConfigDeUso);
    SetRecurso(false);
  }

  function Recursos() {
    SetConfig(false);
    SetLembretes(false);
    SetUsoDiario(false);
    SetConfigDeUso(false);
    SetRecurso(!Recurso);
  }

  return (
    <div className="mt-15">
      <div className="mb-[69px] text-center md:text-left md:ml-5 ">
        <h1 className=" text-[40px] bold md:text-[55px] md:ml-7">
          Memory<span className="text-texto-azul">Bot</span>
        </h1>
        <p className="md:text-[25px]">Instruções para o uso do produto</p>
      </div>

      <div>
        <ul className="h-70 md:bg-nav-claro md:h-115 md:w-[500px] md:text-texto-branco md:text-2xl md:p-5 md:rounded">
          <li
            className="border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px] "
            onClick={Configuracao}
          >
            1. Configuração Inicial
          </li>
          <li className="border-t-4 mb-5  md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]" onClick={Lembrete}>
            2. Programação de lembretes
          </li>
          <li
            className="border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]"
            onClick={Usodiario}
          >
            3. Uso Diário
          </li>
          <li
            className="border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]"
            onClick={Configuracaodeus}
          >
            4. Configuração de Uso
          </li>
          <li className="border-t-4 border-b-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]" onClick={Recursos}>
            5. Recursos Adicionais para Segurança e Bem-estar
          </li>
        </ul>
      </div>

      <div className={Config ? "block" : "hidden"}>
        {/* Fazer configuração apartir daqui */}

        {/* era pra ser uma imagem aqui mas não ta indo  ai tu arruma*/}
        <div className="w-[290px] h-[145px] border"></div>

        <p className="md:w-[799px] md:text-xl">
          Antes do uso diário, é necessário realizar uma configuração inicial
          simples, que pode ser feita por um familiar, cuidador ou profissional
          de saúde.
        </p>

        <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
        
          <li>
            Organização dos medicamentos: Separe os remédios de acordo com os
            períodos do dia (manhã, tarde, noite) e insira nos compartimentos
            apropriados do Memory Bot.
          </li>

          <li>
            Facilidade de identificação: Utilize etiquetas de cores distintas ou
            símbolos táteis nos compartimentos para facilitar o reconhecimento,
            pensando na acessibilidade do idoso.
          </li>

          <li>
            Download e emparelhamento do app: Baixe o aplicativo do Memory Bot
            no celular do idoso ou do responsável. Siga o passo a passo dentro
            do app para conectar o robô via Bluetooth.
          </li>

          <li>
            Permissões essenciais: Autorize o uso de localização, notificações,
            Bluetooth e microfone (para detecção de sons) no celular onde o app
            está instalado.
          </li>

        </ul>
      </div>












      <div className={Lembretes ? "flex" : "hidden"}>
        Fazer lembretes apartir daqui
      </div>

      <div className={UsoDiario ? "flex" : "hidden"}>
        Fazer uso diario apartir daqui
      </div>

      <div className={ConfigDeUso ? "flex" : "hidden"}>
        Fazer configuração de uso apartir daqui
      </div>

      <div className={Recurso ? "flex" : "hidden"}>
        Fazer Recursos Adicionais apartir daqui
      </div>











    </div>
  );
}
