import React from 'react'

const MemoryBotGame = "Public/downloads/MemoryBotGame.exe";

export function ButtonJogar() {
  return (
    <a href={MemoryBotGame} download="MemoryBotGame.exe">
      <button className='cursor-pointer flex justify-center items-center gap-1 w-32 h-8 bg-fundo-botao font-game text-xs font-medium text-texto-escuro text-center rounded-lg shadow-[0_0_60px_rgba(122,230,219,100)] md:w-[236px] md:h-[74px] md:text-3xl'>Baixar  </button>
    </a>
  )
}