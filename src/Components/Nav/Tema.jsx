import React from "react";

export function Tema() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" />
      <div className="flex  w-20 h-10 rounded-full bg-gradient-to-r from-gradiente1-tema-claro to-gradiente2-tema-claro peer-checked:from-gradiente1-tema-escuro peer-checked:to-gradiente2-tema-escuro transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-fundo-tema-claro peer-checked:after:bg-fundo-tema-escuro after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"></div>
    </label>
  );
}
