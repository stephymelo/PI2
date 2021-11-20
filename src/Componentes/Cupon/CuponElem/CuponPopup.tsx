import * as React from 'react';
import { CuponObj } from "../../../Types/CuponObj";
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"



interface CuponPopup {
    // CuponObj: [];

}

export const CuponPopup: React.FC<CuponPopup> = () => {
    const styles: React.CSSProperties = {
        display: "block",
      };
    

    const handleActiveCupon = () =>{
        

        



    };




    return (
        <section style={styles} id="cuponPopup" className='cuponPopup'>
            <article className='cuponPopup__article--1'>
                <img src={colcafeLogo}></img>
                

            </article>

            <article className='cuponPopup__article--2'>
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