import * as React from 'react';
import { CuponObj } from "../../../Types/CuponObj";
import qrcode from "../../../Recursos/logos/Logos/QRCupon.png";
import rappilogo from "../../../Recursos/logos/Logos/rappiLogo.png";
import whatsapp from "../../../Recursos/logos/IconosSVG/whatsapp.svg"
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"



interface CuponQR {
  handleCloseQR : () => void
}

export const CuponQR: React.FC<CuponQR> = ({handleCloseQR}) => {
    





    return (
        <section  className='cuponQr' onClick={handleCloseQR}>
            <article className='cuponQr__article--1'>
                <img className='cuponQr__article--1__logo' src={colcafeLogo}></img>


            </article>

            <article className='cuponQr__article--2'>
                <p>Valido solo para Colcafe</p>
                <img src={qrcode}></img>
              

                <h4>Vence en 5 dias</h4>

                <button className="button"><img src ={rappilogo}></img>Compartir</button>
               

            </article>

         


        </section>
        
    );
}