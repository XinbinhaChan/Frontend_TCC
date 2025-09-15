import React from 'react'

export function CardProdutos(props) {
  return (
    <div className='w-fit ml-2 mb-10 shadow-[0_0_20px_rgba(0,0,0,100)] dark:shadow-[0_0_20px_rgba(122,230,219,100)] rounded-3xl' data-aos="zoom-in">

        <div className='w-30 md:w-[317px] md:h-[222px] h-20 flex items-center justify-center rounded-t-3xl border-2 border-fundo-card  dark:border-dark-nav '>
          <img src={props.img} alt="" className='w-15 h-15 md:w-[175px] md:h-[134px]'/>
        </div>

        <div className=' bg-fundo-card dark:bg-dark-nav p-2 rounded-b-3xl md:h-[88px]'>
          <p className='font-texto-normal-mobile text-xs mb-2 md:text-4xl dark:text-texto-branco'>Nome: {props.nome}</p>
          

          <p className='font-texto-normal-mobile text-xs text-texto-ciano dark:text-texto-azul md:text-xl'>Preço: {props.preco}</p>
        </div>

    </div>
  )
}
