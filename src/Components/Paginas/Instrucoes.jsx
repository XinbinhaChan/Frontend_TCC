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
    <div className="mt-15 font-texto-normal w-[1500px] h-full flex flex-col items-baseline justify-baseline dark:bg-dark-background 2xl:w-[1950px] 2xl:h-[900px]"> 
      <div className="mb-[69px] text-center md:text-left ">
        <h1 className=" text-[40px] bold md:text-[55px] md:ml-7 2xl:ml-15 dark:text-texto-branco">
          Memory<span className="text-texto-azul">Bot</span>
        </h1>
        <p className="md:text-[25px] dark:text-texto-branco 2xl:ml-5">
          Instruções para o uso do produto
        </p>
      </div>

      <div className="dark:bg-dark-background w-fit h-fit">
        <ul className="h-180 md:bg-nav-claro dark:md:bg-dark-nav  md:h-fit md:w-[500px] md:text-texto-branco md:text-2xl md:p-5 md:rounded-tr-xl 2xl:h-177">
          <div className="md:flex gap-51 md:w-fit">
            <li
              className={
                Config
                  ? "border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px] text-texto-azul"
                  : "dark:text-texto-branco border-black border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]"
              }
              onClick={Configuracao}
            >
              1. Configuração Inicial
            </li>
            <div
              className={
                Config
                  ? "flex flex-col justify-baseline items-baseline w-[375px] font-texto-normal-mobile dark:text-texto-branco dark:bg-dark-background md:text-black md:w-fit md:text-xl md:justify-center md:items-center"
                  : "hidden"
              }
            >
              {/* Fazer configuração apartir daqui */}

              {/* era pra ser uma imagem aqui mas não ta indo  ai tu arruma*/}
              <img src="" alt="" className="w-[290px] h-[145px] border-2" />

              <p className="md:w-[799px] md:text-xl">
                Antes do uso diário, é necessário realizar uma configuração
                inicial simples, que pode ser feita por um familiar, cuidador ou
                profissional de saúde.
              </p>

              <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
                <li>
                  Organização dos medicamentos: Separe os remédios de acordo com
                  os períodos do dia (manhã, tarde, noite) e insira nos
                  compartimentos apropriados do Memory Bot.
                </li>

                <li>
                  Facilidade de identificação: Utilize etiquetas de cores
                  distintas ou símbolos táteis nos compartimentos para facilitar
                  o reconhecimento, pensando na acessibilidade do idoso.
                </li>

                <li>
                  Download e emparelhamento do app: Baixe o aplicativo do Memory
                  Bot no celular do idoso ou do responsável. Siga o passo a
                  passo dentro do app para conectar o robô via Bluetooth.
                </li>

                <li>
                  Permissões essenciais: Autorize o uso de localização,
                  notificações, Bluetooth e microfone (para detecção de sons) no
                  celular onde o app está instalado.
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex gap-51 md:w-fit">
            <li
            className={
              Lembretes
                ? "border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px] text-texto-azul"
                : "dark:text-texto-branco border-black border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]"
            }
            onClick={Lembrete}
          >
            2. Programação de lembretes
          </li>

          <div
            className={
              Lembretes
                ? "flex flex-col justify-baseline items-baseline w-100 font-texto-normal-mobile dark:bg-dark-background dark:text-texto-branco md:text-black md:w-fit md:text-xl md:justify-center md:items-center"
                : "hidden"
            }
          >
            <img src="" alt="" className="w-[290px] h-[145px] border-2" />
            <p>
              Com o Memory Bot conectado ao app, você poderá programar todas as
              funções de forma personalizada:
            </p>
            <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
              <li>
                Definição de horários de medicamentos: Insira no aplicativo os
                horários exatos de cada remédio, escolhendo os dias, intervalos
                e alarmes conforme a prescrição médica.
              </li>
              <li>
                Sincronização automática: As informações são enviadas
                automaticamente ao robô, que passa a emitir alertas e registrar
                os dados sem necessidade de conexão constante ao celular.
              </li>
              <li>
                Check-ins de bem-estar: Configure também lembretes para
                perguntas simples como: “Você está bem hoje?”, “Está com sede?”,
                “Sentiu dor ou tontura?”
              </li>
            </ul>
            <p>
              Esses check-ins ajudam a monitorar o estado físico e emocional do
              idoso ao longo do dia.
            </p>
          </div>
          </div>

          <div className="md:flex gap-60 md:w-fit">
            <li
            className={
              UsoDiario
                ? "border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px] text-texto-azul"
                : "dark:text-texto-branco border-black border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]"
            }
            onClick={Usodiario}
          >
            3. Uso Diário
          </li>
          <div
            className={
              UsoDiario
                ? "flex flex-col justify-baseline items-baseline w-[375px] font-texto-normal-mobile dark:bg-dark-background dark:text-texto-branco md:text-black md:w-fit md:text-xl md:justify-center md:items-center"
                : "hidden"
            }
          >
            <img src="" alt="" className="w-[290px] h-[145px] border-2" />
            <p>
              O Memory Bot foi desenvolvido para ser simples, intuitivo e
              amigável para idosos com perdas cognitivas leves a moderadas.
            </p>
            <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
              <li>
                Alertas acessíveis: Nos horários definidos, o robô emite um
                alerta sonoro suave, uma vibração tátil, e uma luz indicativa no
                compartimento correto.
              </li>
              <li>
                Interação com o robô: O idoso deve abrir o compartimento
                indicado, retirar o medicamento e realizar a ingestão. Caso
                necessário, o robô pode repetir o lembrete com voz amigável.
              </li>
              <li>
                Sensores inteligentes: O Memory Bot reconhece quando o
                compartimento foi aberto e fechado, registrando o uso
                automaticamente no sistema. Tudo isso é visível no histórico do
                app.
              </li>
            </ul>
          </div>
          </div>

          <div className="md:flex gap-60 md:w-fit">
            <li
            className={
              ConfigDeUso
                ? "border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px] text-texto-azul"
                : "dark:text-texto-branco border-black border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]"
            }
            onClick={Configuracaodeus}
          >
            4. Confirmação de Uso
          </li>
          <div
            className={
              ConfigDeUso
                ? "flex flex-col justify-baseline items-baseline w-[375px] font-texto-normal-mobile dark:bg-dark-background dark:text-texto-branco md:text-black md:w-fit md:text-xl md:justify-center md:items-center"
                : "hidden"
            }
          >
            <img src="" alt="" className="w-[290px] h-[145px] border-2" />
            <p>
              Para garantir o registro correto do uso do medicamento, o Memory
              Bot oferece duas formas para a confirmação:
            </p>
            <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
              <li>
                Automática: Assim que o compartimento é fechado, os sensores
                internos reconhecem a ação e registram a hora do uso.
              </li>
              <li>
                Manual (opcional): Caso o idoso deseje ou precise, ele pode
                tocar em um botão físico no robô ou acionar a opção “Tomei meu
                remédio” no aplicativo.
              </li>
            </ul>
            <p>
              Essa dupla verificação ajuda o cuidador a garantir que os
              medicamentos estão sendo administrados corretamente.
            </p>
          </div>
          </div>

          <div className="md:flex gap-62 md:w-fit">
            <li
            className={
              Recurso
                ? "border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px] text-texto-azul"
                : "dark:text-texto-branco border-black border-t-4 mb-5 md:border-none cursor-pointer hover:text-texto-azul duration-300 md:w-[309px] md:mb-[50px]"
            }
            onClick={Recursos}
          >
            5. Recursos Adicionais para Segurança e Bem-estar
          </li>
        
        <div
          className={
            Recurso
              ? "flex flex-col justify-baseline items-baseline w-[375px] font-texto-normal-mobile dark:bg-dark-background dark:text-texto-branco md:text-black md:w-fit md:text-xl md:justify-center md:items-center"
              : "hidden"
          }
        >
          <img src="" alt="" className="w-[290px] h-[145px] border-2" />
          <p className="mb-5">
            O Memory Bot vai além da lembrança de medicamentos. Ele cuida da
            saúde e segurança do idoso com funcionalidades integradas:
          </p>
          <p className="font-bold mb-2">Check-ins Regulares</p>
          <ul className="space-y-2 md:w-[799px] md:text-xl mb-2">
            <li>
              O robô e o aplicativo realizam pequenas interações durante o dia
              com perguntas simples como:
              <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
                <li>“Está se sentindo bem?”</li>
                <li>“Já se alimentou?”</li>
                <li>“Deseja ajuda?”</li>
              </ul>
            </li>
          </ul>
          <p className="mb-2">
            Essas perguntas ajudam o idoso a se manter consciente de sua rotina
            e bem-estar.
          </p>
          <ul className="space-y-2 md:w-[799px] md:text-xl">
            <li>
              Geolocalização:
              <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
                <li>
                  O app acompanha a localização em tempo real do robô (e do
                  celular), permitindo que o cuidador saiba onde o idoso está —
                  útil em situações de confusão ou desorientação.
                </li>
              </ul>
            </li>
            <li>
              Detecção de Obstáculos:
              <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
                <li>
                  Sensores ao redor do robô identificam se há objetos bloqueando
                  o acesso aos compartimentos ou áreas críticas, evitando
                  acidentes ou frustração do idoso.
                </li>
              </ul>
            </li>
            <li>
              Detecção de Sons Altos:
              <ul className="list-disc list-inside space-y-2 md:w-[799px] md:text-xl">
                <li>
                  O robô monitora o ambiente e reconhece ruídos incomuns, como
                  batidas fortes, quedas ou gritos.
                </li>
                <li>
                  Se algo for detectado, o sistema envia um alerta instantâneo
                  ao cuidador pelo aplicativo, sugerindo uma possível
                  emergência.
                </li>
              </ul>
            </li>
          </ul>
        </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
