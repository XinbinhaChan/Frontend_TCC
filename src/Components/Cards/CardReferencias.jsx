import React from 'react'

export function CardReferencias(props) {
  return (
    <div className='bg-red-500 flex justify-center items-center flex-col w-31'>
        <div className='bg-blue-500 flex justify-center items-center w-31'>
            <img src="" alt="" className='border-2 w-5 h-5' />
        </div>
        <div>
            <p className='text-texto-escuro font-texto-normal-mobile text-[10px] w-21 text-center'>{props.texto}</p>
        </div>
    </div>
  )
}
