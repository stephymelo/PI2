import * as React from 'react';
import retoImg from "../../../Recursos/imagenes/productLogos/retoImg.png"
import toshLogo from "../../../Recursos/imagenes/productLogos/toshLogo.png"
import {
    Link,
} from "react-router-dom";


interface RetoElem {
}

export const RetoElem: React.FC<RetoElem> = () => {
    return (
        <section className='retoList'>
            <h2 className="retoList__title">Último reto</h2>

            <article className="lastGame" style={{ backgroundImage: `url(${retoImg})` }}>
                <Link to="/menu/retoDesc">
                         <img className="lastGame__logo" src={toshLogo} />
                         <div className="lastGame__rect">
                             <h1 className="lastGame__name">Arma tu torre Tosh</h1>
                             <p className="lastGame__descrip">Muestranos la torre más creativa que puedas construir con nuestras galletas Tosh.</p>
                             <div className="lastGame__bono">
                                 <h1 className="bonoNumber">Obten<br />25%</h1>
                             </div>
                         </div>
                 </Link>
       
            </article>


            <h2 className="gameList__title">Otros retos</h2>
            <div className="moreGamesList">
                <article className="moreGameCard">
                    <div className="moreGameCard__left">
                    </div>
                    <div className="moreGameCard__reto">
                        <h1 className="titleGame">Cocina en casa</h1>
                        <p className="descriptGame">Realiza la receta que más te guste y toma una foto de tu obra culinaria juntos con los empaques de los productos requeridos en la receta realizada </p>
                    </div>
                    <div className="lastGame_bono lastGame_bono--more">
                        <h1 className="bonoNumber bonoNumber--red">Obten<br />20%</h1>
                    </div>
                </article>

                <article className="moreGameCard moreGameCard--blue">
                    <div className="moreGameCard__left">
                    </div>
                    <div className="moreGameCard__right">
                        <h1 className="titleGame">Recetas Rica</h1>
                        <p className="descriptGame">Muestranos lo que se puede hacer con nuestros Jamones y gana grandes recompensas.</p>
                    </div>
                    <div className="lastGame_bono lastGame_bono--more">
                        <h1 className="bonoNumber bonoNumber--blue">Obten<br />15%</h1>
                    </div>
                </article>

            </div>
        </section>
    );
}