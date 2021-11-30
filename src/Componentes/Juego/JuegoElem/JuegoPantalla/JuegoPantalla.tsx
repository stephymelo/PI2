import * as React from 'react';
import tetrix from "../../../../Recursos/imagenes/juego/gameTosh.png"

interface JuegoPantalla {
}

export const JuegoPantalla: React.FC<JuegoPantalla> = () => {
    const styles: React.CSSProperties = {
        backgroundImage:"url(" + { tetrix } + ")",
      };
    return (
        <section className="gameTetrix" style={{ backgroundImage:`url(${tetrix})` }}>
        </section>
);
}