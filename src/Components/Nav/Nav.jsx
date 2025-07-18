import React from "react";
import { Tema } from "./Tema";

export function Nav() {

    return (
        <header>
            <nav className="flex items-center gap-50 h-24 w-screen bg-nav-claro">
                
                <button className="ml-10">Logo</button>

                <Tema  className="border-2-red-300" />

                <ul className="flex gap-14">
                    <li className="text-texto-branco font-texto-normal">Login/Cadastro</li>
                    <li className="text-texto-branco font-texto-normal">Instruções</li>
                    <li className="text-texto-branco font-texto-normal">Produtos</li>
                    <li className="text-texto-branco font-texto-normal">Referências</li>
                    <li className="text-texto-branco font-texto-normal">Sobre nós</li>
                </ul>
            </nav>
        </header>
    );
}