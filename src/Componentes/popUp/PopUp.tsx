import * as React from 'react';

import logo from "../../Recursos/logos/Logos/LogoEfipuntos/logoPopup.svg";


interface PopUpProp {
}

export const PopUp: React.FC<PopUpProp> = () => {
    return (
        <section className='popUp'>
            <div  className='popUp__div'>
                <img className='popUp__logo' src={logo}/>
                <p className='popUp__texto'>Gracias por jugar</p>
                <p className='popUp__texto popUp__textoBold'>¡Disfruta tu cupón!</p>

                <div className='popUp__btnDiv'>
                    <button className='popUp__button'>Ver cupón</button>
                    <button className='popUp__button'>Seguir jugando</button>
                </div>
            </div>
        </section>
    );
}