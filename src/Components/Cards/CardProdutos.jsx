import React from 'react'

export function CardProdutos(props) {
  return (
    <div className='w-fit ml-2 mb-10' data-aos="zoom-in">

        <div className='w-30 md:w-[634px] md:h-[444px] h-20 flex items-center justify-center rounded-t-3xl border-2 border-fundo-card'>
          <img src={props.img} alt="" className='w-20 h-20 md:w-[350px] md:h-[268px]'/>
        </div>

        <div className=' bg-fundo-card p-2 rounded-b-3xl md:h-[176px]'>
          <p className='font-texto-normal-mobile text-xs mb-2 md:text-4xl'>Nome: {props.nome}</p>
          

          <p className='font-texto-normal-mobile text-xs text-gradiente1-h1 md:text-xl'>Preco: {props.preco}</p>
        </div>

    </div>
  )
}
