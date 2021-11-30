import * as React from 'react';
import publicidad from "../../../../Recursos/imagenes/juego/juegopubli.png"

interface JuegoDos {
}

export const JuegoDos: React.FC<JuegoDos> = () => {
    const styles: React.CSSProperties = {
        backgroundImage:"url(" + { publicidad } + ")",
      };
    return (
        <section className="gamePubli" style={{ backgroundImage:`url(${publicidad})` }}>
            <button className="iniciar">Iniciar</button>
        </section>
);
}