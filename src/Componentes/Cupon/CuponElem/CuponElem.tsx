import React from "react";
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"
import zigZag from "../../../Recursos/logos/IconosSVG/cuponZigzag.svg"
import { CuponObj } from "../../../Types/CuponObj";
// const cuponPopup= document.getElementById("cuponPopup");
const cuponPopup = (document.getElementById('cuponPopup') as HTMLBodyElement);

export type CuponElem = CuponObj &{

}

const CuponElem: React.FC<CuponElem> = ({id,titulo,fechaVencer,descripcion,imagenUrl,codigoActivable,status }) => {

    const handlePopup = () =>{
        cuponPopup.style.display="block";
        // const styles: React.CSSProperties = {
        //     backgroundImage: toshGame,
        //   };
       

        



    };


    return (
        <article onClick={handlePopup} className='cupon'>
            <div className='cupon__section'>
                <img className='cupon__section--1__zigzag' src={zigZag} />
                <div className='cupon__section--1'>
                    <img className='cupon__section--1__logo' src={colcafeLogo}></img>

                </div>
                <div className='cupon__section--2'>
                    <h2 className="cupon__section--2__titulo">{titulo}</h2>
                </div>
                <div className='cupon__section--3'>
                    <h3 className="cupon__section--3__vence">{fechaVencer}</h3>
                    <p className="cupon__section--3__fecha">{fechaVencer}</p>
                </div>
            </div>
        </article>


    );
}




export default CuponElem;