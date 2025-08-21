import React from "react"

import {Nav} from './Components/Nav/Nav.jsx'
import {Home} from './Components/Páginas/Home.jsx'
import { Produtos } from "./Components/Páginas/Produtos.jsx"

export function App (){
    return ( 

        <div className="gap-5">
             
        <Nav/> 

        <Produtos/>

        </div>
    )
}