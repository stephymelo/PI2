import * as React from 'react';
import win from "../../../../Recursos/imagenes/juego/juegowin.png";

interface JuegoWin {
}

export const JuegoWin: React.FC<JuegoWin> = () => {
    const styles: React.CSSProperties = {
        backgroundImage:"url(" + { win } + ")",
      };
    return (
        <section className="gamePubli" style={{ backgroundImage:`url(${win})` }}>
            <button className="irACupon">Ver Cupon</button>
        </section>
);
}