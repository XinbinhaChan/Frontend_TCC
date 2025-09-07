import { useState } from "react";
import { Tema } from "./Tema";
import { Links } from "./Links";
import { Link } from "react-router-dom";
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
      <nav className="flex items-center md:gap-50 h-16 w-screen bg-nav-claro dark:bg-dark-nav justify-between z-40 fixed">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-10 md:w-12 md:ml-5" />
          </Link>
          <div className="hidden md:flex ml-[125px]">
            <Tema />
          </div>
        </div>

        <ul className="flex gap-10 text-texto-branco hidden md:flex mr-15">
          <li>
            <Links texto="Instruções" link="/instrucao" />
          </li>
          <li>
            <Links texto="Produtos" link="/produtos" />
          </li>
          <li>
            <Links texto="Referências" link="/referencia" />
          </li>
          <li>
            <Links texto="Sobre nós" link="/sobre" />
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
            menu ? "flex bg-menu-hamburguer dark:bg-dark-nav p-11.75 mt-40 rounded" : "hidden"
          }
        >
          <ul className="text-texto-branco">
            <Tema className="border-2-red-300 md:hidden" />

            <li className="mb-2">
              <Links texto="Home" link="/" />
            </li>
            <li className="mb-2">
              <Links texto="Instruções" link="/instrucao" />
            </li>
            <li className="mb-2">
              <Links texto="Produtos" link="/produtos" />
            </li>
            <li className="mb-2">
              <Links texto="Referências" link="/referencia" />
            </li>
            <li >
              <Links texto="Sobre nós" link="/sobre" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
