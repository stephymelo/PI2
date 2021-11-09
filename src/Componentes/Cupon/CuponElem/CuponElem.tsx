import React from "react";
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranLogo.png"
import zigZag from "../../../Recursos/logos/IconosSVG/cuponZigzag.svg"

interface CuponElem {

}

const CuponElem: React.FC<CuponElem> = ({ }) => {

    return (
        <article className='cupon'>
            <div className='cupon__section'>
                <img className='cupon__section--1__zigzag' src={zigZag} />
                <div className='cupon__section--1'>
                    <img className='cupon__img' src={colcafeLogo}></img>

                </div>
                <div className='cupon__section--2'>
                    <h2 className="cupon__section--2__titulo">25% en galletas</h2>
                </div>
                <div className='cupon__section--3'>
                    <h3 className="cupon__section--3__vence">Vence en 2 dias</h3>
                    <p className="cupon__section--3__fecha">30-10-2021</p>
                </div>
            </div>
        </article>


    );
}




export default CuponElem;