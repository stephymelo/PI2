import * as React from 'react';
import win from "../../../../Recursos/imagenes/juego/juegowin.png";
import {
    Link,
} from "react-router-dom";


interface JuegoWin {
}

export const JuegoWin: React.FC<JuegoWin> = () => {
    const styles: React.CSSProperties = {
        backgroundImage:"url(" + { win } + ")",
      };
    return (
        <section className="gamePubli" style={{ backgroundImage:`url(${win})` }}>
            <button className='irACupon'><Link to="/menu/miscupones/todos" className="link"><p>Ver Cupon</p></Link></button>
        </section>
);
}