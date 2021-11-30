import * as React from 'react';
import publicidad from "../../../../Recursos/imagenes/juego/juegopubli.png"
import {
    Link,
} from "react-router-dom";

interface JuegoDos {
}

export const JuegoDos: React.FC<JuegoDos> = () => {
    const styles: React.CSSProperties = {
        backgroundImage:"url(" + { publicidad } + ")",
      };
    return (
        <section className="gamePubli" style={{ backgroundImage:`url(${publicidad})` }}>
            <button className='iniciar'><Link to="/menu/juegotetrix" className="link"><p>Iniciar</p></Link></button>
        </section>
);
}