import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, botonClic, manejarClick }) {
    return (
        <button className={ botonClic ? 'boton-click' : 'boton-reiniciar' } onClick={manejarClick}>
           {texto}
        </button>
    )
}

export default Boton;