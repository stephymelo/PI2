import React from "react";
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"
import zigZag from "../../../Recursos/logos/IconosSVG/cuponZigzag.svg"

interface CuponExpirado {

}

const CuponExpirado: React.FC<CuponExpirado> = ({ }) => {

    return (
        <article className='cupon__expirado'>
            <div className='cupon__expirado__section'>
                <div className='cupon__expirado__section--1'>
                    <img className='cupon__section--1__logo' src={colcafeLogo}></img>
                    <h3 className="cupon__expirado__section--1__vence">Venció 20-05</h3>
                </div>
                <div className="cupon__expirado__section--2">
                    <h3 className="rotate">B453V</h3>
                </div>
                <span className="dot"></span>
                <span className="dot--1 dot"></span>

            </div>
        </article>


    );
}




export default CuponExpirado;