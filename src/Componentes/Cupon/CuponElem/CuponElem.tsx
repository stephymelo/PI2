import React from "react";
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"
import zigZag from "../../../Recursos/logos/IconosSVG/cuponZigzag.svg"
import { CuponObj } from "../../../Types/CuponObj";
import { CuponPopup } from "./CuponPopup";
// const cuponPopup= document.getElementById("cuponPopup");
// const cuponPopup = (document.getElementById('cuponPopup') as HTMLBodyElement);
// const cuponPopup: HTMLElement | null= document.getElementById('cuponPopup');


export type CuponElem = CuponObj & {
    SetCuponSelected: React.Dispatch<React.SetStateAction<number | undefined>>,
}

const CuponElem: React.FC<CuponElem> = ({ id, titulo, fechaVencer, descripcion, imagenUrl, codigoActivable, status, color, SetCuponSelected }) => {

    const handlePopup = () => {

        SetCuponSelected(id);




    };

    const styles: React.CSSProperties = {
        backgroundColor: color,
        

    };

    const style: React.CSSProperties = {
        fill: color,
        

    };





    return (
        <article className='cupon'>
            <div className='cupon__section' onClick={handlePopup}>
                <svg className='cupon__section--1__zigzag' style={style} width="168" height="9" viewBox="0 0 168 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.52312 8.95373L-5.14924 -0.0119512L12.1955 -0.0119497L3.52312 8.95373Z" />
                    <path d="M115.498 8.95373L106.825 -0.0119512L124.17 -0.0119497L115.498 8.95373Z"/>
                    <path d="M19.4549 8.95373L11.1767 -0.0119511L27.733 -0.0119497L19.4549 8.95373Z"/>
                    <path d="M131.884 8.95373L123.212 -0.0119512L140.557 -0.0119497L131.884 8.95373Z" />
                    <path d="M67.2487 8.95373L58.5763 -0.0119512L75.9211 -0.0119497L67.2487 8.95373Z" />
                    <path d="M35.3859 8.95373L26.7136 -0.0119512L44.0583 -0.0119497L35.3859 8.95373Z" />
                    <path d="M147.815 8.95373L139.537 -0.0119511L156.093 -0.0119497L147.815 8.95373Z" />
                    <path d="M83.6354 8.95373L74.9631 -0.0119512L92.3078 -0.0119497L83.6354 8.95373Z" />
                    <path d="M51.7726 8.95373L43.1003 -0.0119512L60.445 -0.0119497L51.7726 8.95373Z" />
                    <path d="M163.748 8.95373L155.075 -0.0119512L172.42 -0.0119497L163.748 8.95373Z" />
                    <path d="M100.021 8.95373L91.3488 -0.0119512L108.694 -0.0119497L100.021 8.95373Z" />
                </svg>

                <div className='cupon__section--1' style={styles}>
                    <img className='cupon__section--1__logo'  id={""+id} src={imagenUrl}></img>

                </div>
                <div className='cupon__section--2'>
                    <h2 className="cupon__section--2__titulo">{titulo}</h2>
                </div>
                <div className='cupon__section--3'>
                    <h3 className="cupon__section--3__vence">{descripcion}</h3>
                    <p className="cupon__section--3__fecha">{fechaVencer}</p>
                </div>
            </div>
        </article>


    );
}




export default CuponElem;