import * as React from 'react';
import tetrix from "../../../../Recursos/imagenes/juego/gameTosh.png"
import {
    Link,
} from "react-router-dom";

interface JuegoPantalla {
}

export const JuegoPantalla: React.FC<JuegoPantalla> = () => {
    const styles: React.CSSProperties = {
        backgroundImage:"url(" + { tetrix } + ")",
      };
    return (
        <Link to="/menu/juegowin">
        <section className="gameTetrix" style={{ backgroundImage:`url(${tetrix})` }}>
        </section>
        </Link>
);
}