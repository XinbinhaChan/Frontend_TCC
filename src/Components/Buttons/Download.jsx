import React from 'react'

import IconDownload from "../../assets/IconDownload.png"

export function Download() {
  return (
    <button className='flex justify-center items-center gap-1 w-32 h-8 bg-fundo-botao font-link-mobile text-xs font-medium text-texto-escuro text-center rounded-lg shadow-[0_0_60px_rgba(122,230,219,100)]'>Download <img src={IconDownload} alt="" className='w-3 h-3.5'/> </button>
  )
}