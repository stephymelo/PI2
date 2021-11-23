import * as React from 'react';
import { CuponObj } from "../../../Types/CuponObj";
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"



interface CuponPopup {
    cuponElems : CuponObj[],
    setCuponElems: React.Dispatch<React.SetStateAction<CuponObj[]>>,
    cuponSelected: number | undefined,
    SetCuponSelected : React.Dispatch<React.SetStateAction<number | undefined>>,

}

export const CuponPopup: React.FC<CuponPopup> = ({cuponElems,cuponSelected, SetCuponSelected, setCuponElems}) => {
    


    const handleActiveCupon = () => {
        const editCuponElems = [...cuponElems];
        const indexSelected = cuponElems.findIndex(cupon => cupon.id === cuponSelected);
        editCuponElems[indexSelected] = {
            ...editCuponElems[indexSelected],
            status: 'activo' 
          } 
        setCuponElems(editCuponElems);
        SetCuponSelected(undefined);


    };




    return (
        <section  className='cuponPopup'>
            <article className='cuponPopup__article--1'>
                <img className='cuponPopup__article--1__logo' src={colcafeLogo}></img>


            </article>

            <article className='cuponPopup__article--2'>
                <h3 className='cuponPopup__article--2__title'>25% de descuento en galletas</h3>
                <p className='cuponPopup__article--2__title--1'>Descuento válido en almacenes:</p>
                <ul className='cuponPopup__article--2__lista'>
                    <li>Carulla</li>
                    <li>Jumbo</li>
                    <li>Ara</li>
                </ul>

                <h4>Vence en 5 dias</h4>

                <button className="button" onClick={handleActiveCupon}>Activar</button>
                <p className="terminos">Aplica en la compra de “Galletas Tosh Fusión de Cereales” , “Galletas de Chocolate Tosh” , “Galleta de Vainilla Tosh” en sus presentaciones de 382g x 2 tacos </p>

            </article>



        </section>
    );
}