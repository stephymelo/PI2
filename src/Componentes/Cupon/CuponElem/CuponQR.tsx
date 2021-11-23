import * as React from 'react';
// import { CuponObj } from "../../../Types/CuponObj";
import qrcode from "../../../Recursos/logos/Logos/QRCupon.png";
import rappilogo from "../../../Recursos/logos/Logos/rappiLogo.png";
import whatsapp from "../../../Recursos/logos/IconosSVG/whatsappLogo.svg"
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"



interface CuponQR {
    handleCloseQR: () => void
}

export const CuponQR: React.FC<CuponQR> = ({ handleCloseQR }) => {






    return (
        <section className='cuponQr' onClick={handleCloseQR}>
            <article className='cuponQr__article--1'>
                <img className='cuponQr__article--1__logo' src={colcafeLogo}></img>


            </article>

            <article className='cuponQr__article--2'>
                <p className='cuponQr__article--2__p'>Valido solo para Colcafe</p>
                <img src={qrcode}></img>



                <h3 className='cuponQr__article--2__h'>A3907B</h3>
                <p className='cuponQr__article--2__p'>Código activable</p>


                <div className='cuponQr__article--2__buttons'>
                    <button className='button  button2' ><img src={rappilogo}></img></button>
                    <button className='button button2'id='but'><img src={whatsapp}></img>Compartir</button>
                </div>

            </article>




        </section>

    );
}