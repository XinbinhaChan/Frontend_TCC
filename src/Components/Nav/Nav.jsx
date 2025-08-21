import { useState } from "react";
import { Tema } from "./Tema";
import { Links } from "./Links";
import Logo from "../../assets/Logo.png";
import MenuMobile from "../../assets/Menu-hamburguer.png";

export function Nav() {
  const [menu, SetMenu] = useState(false);

  function MenuHamburguer() {
    SetMenu(!menu);
  }

  return (
    <header>
      {/* Pc */}
      <nav className="flex items-center md:gap-50 h-16 w-screen bg-nav-claro justify-between fixed">
        <img src={Logo} alt="logo" className="w-10 md:w-12 ml-3" />

        <div className="hidden md:flex mr-4">
           <Tema className="border-2-red-300" />
        </div>

       

        <ul className="flex gap-10 text-texto-branco hidden md:flex mr-15">
          <li className="hover:text-texto-azul">
            <a href="#">Instruçoes</a>
          </li>

          <li className="hover:text-texto-azul">
            <a href="#">Produtos</a>
          </li>

          <li className="hover:text-texto-azul">
            <a href="#">Referências</a>
          </li>

          <li className="hover:text-texto-azul">
            <a href="#">Sobre nós</a>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden ">
          <img
            src={MenuMobile}
            alt="menu"
            className="w-12.5 mr-4"
            onClick={MenuHamburguer}
          />
        </div>

        <div
          className={
            menu ? "flex bg-menu-hamburguer p-11.75 mt-15 rounded" : "hidden"
          }
        >
          <ul className="text-texto-branco ">
            <Tema className="border-2-red-300 " />

            <li>
              <a href="#">Instruçoes</a>
            </li>

            <li>
              <a href="#">Produtos</a>
            </li>

            <li>
              <a href="#">Referências</a>
            </li>

            <li>
              <a href="#">Sobre nós</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
