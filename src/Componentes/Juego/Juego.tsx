import * as React from 'react';
import { JuegoObj } from "../../Types/JuegoObj";
import toshGame from "../../Recursos/imagenes/productLogos/toshGame.png"
import toshLogo from "../../Recursos/imagenes/productLogos/toshLogo.png"
import zenuLogo from "../../Recursos/imagenes/productLogos/ricaLogo.png"
import jetLogo from "../../Recursos/imagenes/productLogos/jetLogo.png"

export type JuegoProp = JuegoObj & {

  
  
  }

const Juego: React.FC<JuegoProp> = ({ }) => {


  const styles: React.CSSProperties = {
    backgroundImage: toshGame,
  };

    return (
      <section className="gameList">
      <h2 className="gameList__title">Último lanzamiento</h2>
      <article className="lastGame" style={styles}>
          <img className="lastGame__logo" src={toshLogo}/>
          <div className="lastGame__rect">
              <h1 className="lastGame__name">Torres de galleta</h1>
              <p className="lastGame__descrip">Arma torres con galletas del nuevo<br/> sabor yogurt.</p>
              <div className="lastGame__bono">
                  <h1 className="bonoNumber">Obten<br/>25%</h1>
              </div>
          </div>
      </article>

      <h2 className="gameList__title">Más juegos y cupones</h2>
      <div className="moreGamesList">
          <article className="moreGameCard">
              <div className="moreGameCard__left">
                  <img src={zenuLogo} alt=""/>
              </div>
              <div className="moreGameCard__right">
                  <h1 className="titleGame">Trivia Rica</h1>
                  <p className="descriptGame">Responde la trivia y<br/> conoce el nuevo <br/>salchichón ahumado. </p>
              </div>
              <div className="lastGame__bono lastGame__bono--more">
                  <h1 className="bonoNumber bonoNumber--red">Obten<br/>20%</h1>
              </div>
          </article>

          <article className="moreGameCard moreGameCard--blue">
              <div className="moreGameCard__left">
                  <img src={jetLogo} alt=""/>
              </div>
              <div className="moreGameCard__right">
                  <h1 className="titleGame">Río de Jet</h1>
                  <p className="descriptGame">Crea un camino para<br/> que el chocolate Jet <br/>llegue hasta el rio.</p>
              </div>
              <div className="lastGame__bono lastGame__bono--more">
                  <h1 className="bonoNumber bonoNumber--blue">Obten<br/>15%</h1>
              </div>
          </article>

      </div>
  </section>
    );
}

export default Juego;