import * as React from 'react';
import { useState } from 'react';

import torreTosh from "../../../Recursos/imagenes/retos/fotoRetoFinal.svg";
import { PopUp } from '../../popUp/PopUp';


interface RetoFotoProp {
   
}


export const RetoFoto: React.FC<RetoFotoProp> = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const handlePopup =()=>{
        setOpenPopup(true);
    }

    






    return (
        <section className='retoFotoAll'>
            {openPopup && <PopUp />}

            <div className='retoFoto'>

                <h2 className='retoFoto__title'>Muestranos lo que sabes</h2>

                <img className='retoFoto__img' src={torreTosh} />

                <div className='retoFoto__btnDiv'>
                    <button className='retoFoto__button' >Tomar de nuevo</button>
                    <button className='retoFoto__button'onClick={handlePopup}>Enviar</button>
                </div>
            </div>
        </section>
    );
}


