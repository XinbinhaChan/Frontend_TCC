import React from "react";
import { Tema } from "./Tema";
import { Links } from "./Links";
import Logo from "../../assets/Logo.png"
import MenuMobile from "../../assets/Menu-hamburguer.png"

export function Nav() {

    return (
        <header>
            <nav className="flex items-center md:gap-50 h-24 w-screen bg-nav-claro justify-between">
                
                <img src={Logo} alt="logo" className="w-10 md:w-18 ml-3"/>
                <Tema  className="border-2-red-300" />
                
                <div className="md:hidden ">
                    <img src={MenuMobile} alt="menu" className="w-12.5 mr-4"/>
                </div>
            </nav>
        </header>
    );
}