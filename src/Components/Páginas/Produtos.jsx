import React from 'react'
import { CardProdutos } from '../Cards/CardProdutos'
import CardProdutosEsp32 from '../../assets/CardProdutosEsp32.png'

export function Produtos() {
  return (
    <div>

        <div className='flex items-center justify-center mt-11'>
        <h1 className='text-4xl font-bold text-texto-escuro'>Produtos</h1>

        </div>

        <section className=''>
            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>
            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 100,00"/>
        </section>

        </div>
        
    
  )
}
