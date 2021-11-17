import React from "react";
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"
import zigZag from "../../../Recursos/logos/IconosSVG/cuponZigzag.svg"

interface CuponActivo {

}

const CuponActivo: React.FC<CuponActivo> = ({ }) => {

    return (
        <article className='cupon__active'>
            <div className='cupon__active__section'>
                <div className='cupon__active__section--1'>
                    <img className='cupon__section--1__logo' src={colcafeLogo}></img>
                    <h3 className="cupon__active__section--1__vence">¡Faltan 3 dias para vencerse!</h3>
                </div>
                <div className="cupon__active__section--2">
                    <h3 className="rotate">B453V</h3>
                </div>
                <span className="dot"></span>
                <span className="dot--1 dot"></span>

            </div>
        </article>


    );
}




export default CuponActivo;