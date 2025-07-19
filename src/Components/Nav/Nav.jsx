import React from "react";
import { Tema } from "./Tema";
import { Links } from "./Links";
import Logo from "../../assets/Logo.png"
import MenuMobile from "../../assets/Menu-hamburguer.png"

export function Nav() {

    return (
        <header>
            <nav className="flex items-center md:gap-50 h-24 w-screen bg-nav-claro">
                
                <img src={Logo} alt="logo" className="w-10 md:w-18 ml-3"/>
                <Tema  className="border-2-red-300" />
                
                <div className="md:hidden ">
                    <img src={MenuMobile} alt="menu" className="ml-50"/>
                </div>

                <ul className="hidden md:flex gap-14">
                    <li> <Links texto="Login/Cadastro" link="" /> </li>
                    <li> <Links  texto="Instruções" /> </li>
                    <li> <Links texto="Produtos" /> </li>
                    <li> <Links  texto="Referências" /> </li>
                    <li> <Links  texto="Sobre nós" /> </li>
                </ul>
            </nav>
        </header>
    );
}