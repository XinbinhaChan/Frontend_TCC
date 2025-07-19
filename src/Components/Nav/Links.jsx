import React from "react";

export function Links(props) {
    function handleClick() {
        <a href="${props.link}"></a>
        
    }


    return (
        <button onClick={handleClick} className="text-texto-branco font-texto-normal cursor-pointer hover:text-texto-azul duration-400"> {props.texto} </button>
    );
}