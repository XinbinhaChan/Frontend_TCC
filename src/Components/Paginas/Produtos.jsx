import React from 'react'

import { CardProdutos } from '../Cards/CardProdutos'

import CardProdutosEsp32 from '../../assets/CardProdutosEsp32.png'
import CardProdutosButton from '../../assets/CardProdutosButton.png'
import CardProdutosBuzzer from '../../assets/CardProdutosBuzzer.png'
import CardProdutosCaseBateria from '../../assets/CardProdutosCaseBateria.png'
import CardProdutosFiosMF from '../../assets/CardProdutosFiosMF.png'
import CardProdutosFiosMM from '../../assets/CardProdutosFiosMF.png'
import CardProdutosPilha from '../../assets/CardProdutosPilha.png'
import CardProdutosPocketKit from '../../assets/CardProdutosPocketKit.png'
import CardProdutosRegulador from '../../assets/CardProdutosRegulador.png'
import CardProdutosServo from '../../assets/CardProdutosServo.png'


import HomeGameWave from '../../assets/HomeGameWave.png'

export function Produtos() {
  return (
    <div className='flex flex-col items-center justify-center'>

        <div className='flex items-center justify-center mt-11 mb-11'>
        <h1 className='text-4xl font-bold text-texto-escuro'>Produtos</h1>

        </div>

        <section className="flex-col columns-2 items-center justify-center gap-2.5">

            <CardProdutos img={CardProdutosEsp32} nome="Esp32" preco="R$ 49,90"/>

            <CardProdutos img={CardProdutosButton} nome="Button" preco="R$ 14,16"/>

            <CardProdutos img={CardProdutosBuzzer} nome="Buzzer" preco="R$ 8,90"/>

            <CardProdutos img={CardProdutosCaseBateria} nome="Case" preco="R$ 34,89"/>

            <CardProdutos img={CardProdutosFiosMF} nome="Fios MF" preco="R$ 7,90"/>

            <CardProdutos img={CardProdutosFiosMM} nome="Fios MM" preco="R$ 7,90"/>

            <CardProdutos img={CardProdutosPilha} nome="Pilha" preco="R$ 20,00"/>

            <CardProdutos img={CardProdutosPocketKit} nome="Pocket Kit" preco="R$ 62,90"/>

            <CardProdutos img={CardProdutosRegulador} nome="Regulador" preco="R$ 7,50"/>

            <CardProdutos img={CardProdutosServo} nome="Servo" preco="R$ 55,00"/>
        </section>

          <img src={HomeGameWave} alt="" className='md:hidden'/>

        </div>
        
    
  )
}
