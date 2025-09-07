import React from "react";
import { useState, useEffect } from "react";

export function Tema() {

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement
    tagHTML.classList.remove("dark")

    if (theme === "dark") {
      tagHTML.classList.add("dark")
    }
  }, [theme])

  

  return (
    <button className="relative inline-flex items-center cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")} type="button"
      role="switch"
      aria-label="Toggle theme">
      
      <div className={`flex w-20 h-10 rounded-full bg-gradient-to-r transition-all duration-500  after:absolute after:top-1 after:left-1 after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 after:shadow-md after:text-lg ${
        theme === 'dark' 
          ? 'from-gradiente1-tema-escuro to-gradiente2-tema-escuro after:bg-fundo-tema-escuro after:translate-x-10 after:content-["🌙"] ' 
          : 'from-gradiente1-tema-claro to-gradiente2-tema-claro after:bg-fundo-tema-claro after:content-["☀️"] '
}`}>

      </div>
    </button>
  );
}
