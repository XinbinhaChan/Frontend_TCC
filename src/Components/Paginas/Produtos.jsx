import React from 'react'

import { CardProdutos } from '../Cards/CardProdutos'

import CardProdutosEsp32 from '../../assets/CardProdutosEsp32.png'
import HomeGameWave from '../../assets/HomeGameWave.png'

export function Produtos() {
  return (
    <div className='flex flex-col items-center justify-center'>

        <div className='flex items-center justify-center mt-11 mb-11'>
        <h1 className='text-4xl font-bold text-texto-escuro'>Produtos</h1>

        </div>

        <section className="flex-col columns-2 items-center justify-center gap-2.5">

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>
        </section>
          <img src={HomeGameWave} alt="" className=''/>

        </div>
        
    
  )
}
