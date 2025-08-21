import React from 'react'

export function CardProdutos(props) {
  return (
    <div className='w-fit ml-2 mb-10'>

        <div className='w-30 h-20 flex items-center justify-center pt-3 rounded-t-3xl border-2 border-fundo-card'>
          <img src={props.img} alt="" className='w-20 h-20'/>
        </div>

        <div className=' bg-fundo-card p-2 rounded-b-3xl'>
          <p className='font-texto-normal-mobile text-xs mb-2'>Nome: {props.nome}</p>
          

          <p className='font-texto-normal-mobile text-xs text-gradiente1-h1'>Preco: {props.preco}</p>
        </div>

    </div>
  )
}
