import * as React from 'react';
import {
    Link,
} from "react-router-dom";


import torreTosh from "../../../Recursos/imagenes/retos/toshTorre.svg";


interface RetoDescProp {
}

export const RetoDesc: React.FC<RetoDescProp> = () => {
    return (
        <section className='retoDesc'>
            <div className='retoDesc__titleDiv'>
            <h2 className='retoDesc__title'>Arma tu torre Tosh</h2>
            </div>

            <img className='retoDesc__img' src={torreTosh}/>

            <div className='retoDesc__descDiv'>
                <h3 className='retoDesc__reglasTitle'>Reglas del reto:</h3>
                <p>La idea es construir la torre más creativa y alta que puedas, utilizando únicamente galletas Tosh. Puedes construir cualquier estructura que te imagines, deja fluir tu imaginación. No es valido usar ningún otro tipo de materiales como pegamento o cinta. </p>
            </div>


            
            <button className='retoDesc__button'><Link to="/menu/retoFoto" className="link"><p>Participar</p></Link></button>
            
        </section>
    );
}