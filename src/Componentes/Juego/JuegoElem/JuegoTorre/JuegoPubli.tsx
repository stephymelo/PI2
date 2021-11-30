import * as React from 'react';
import juegouno from "../../../../Recursos/imagenes/juego/juegointro.png";

interface JuegoPubli {
}

export const JuegoPubli: React.FC<JuegoPubli> = () => {
    const styles: React.CSSProperties = {
        backgroundImage:"url(" + { juegouno } + ")",
      };
    return (
        <section className="gamePubli" style={{ backgroundImage:`url(${juegouno})` }}>
            <button className="gamePubli__btn">Jugar</button>
        </section>
);
}

export default JuegoPubli;