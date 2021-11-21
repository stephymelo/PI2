import * as React from 'react';
import { CuponObj } from "../../../Types/CuponObj";
import qrcode from "../../../Recursos/logos/Logos/QRCupon.png";
import rappilogo from "../../../Recursos/logos/Logos/rappiLogo.png";
import whatsapp from "../../../Recursos/logos/IconosSVG/whatsapp.svg"
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"



interface CuponQR {
  
}

export const CuponQR: React.FC<CuponQR> = () => {
    


    const handleActiveCupon = () => {
        // const editCuponElems = [...cuponElems];
        // const indexSelected = cuponElems.findIndex(cupon => cupon.id === cuponSelected);
        // editCuponElems[indexSelected] = {
        //     ...editCuponElems[indexSelected],
        //     status: 'activo' 
        //   } 
        // setCuponElems(editCuponElems);
        // SetCuponSelected(undefined);


    };




    return (
        <section  className='cuponQr'>
            <article className='cuponQr__article--1'>
                <img src={colcafeLogo}></img>


            </article>

            <article className='cuponQr__article--2'>
                <h3>25% de descuento en galletas</h3>
                <p>Descuento válido en almacenes:</p>
                <ul>
                    <li>Carulla</li>
                    <li>Jumbo</li>
                    <li>Ara</li>
                </ul>

                <h4>Vence en 5 dias</h4>

                <button className="button" onClick={handleActiveCupon}>Activar</button>
                <p>Aplica en la compra de “Galletas Tosh Fusión de Cereales” , “Galletas de Chocolate Tosh” , “Galleta de Vainilla Tosh” en sus presentaciones de 382g x 2 tacos </p>

            </article>



        </section>
    );
}