import * as React from 'react';
import { PerfilObj } from "../../Types/PerfilObj";
import Inputs from '../Utils/Inputs/Inputs';


import background from "../../Recursos/logos/IconosSVG/backgroundLogin.svg";
import google from "../../Recursos/logos/IconosSVG/google.svg";
import facebook from "../../Recursos/logos/IconosSVG/facebook.svg";
import twitter from "../../Recursos/logos/IconosSVG/twitter.svg";
import instagram from "../../Recursos/logos/IconosSVG/instagram.svg";

export type LoginProp = PerfilObj & {



}

const Login: React.FC<LoginProp> = ({ }) => {
  return (
    <div>
      <section className="login">

        <img className="login__background" src={background} />

        <section className="login__inputsDiv">

          <h1 className="login__title">BIENVENIDO DE NUEVO</h1>
          <Inputs placeholder={'Usuario'} type={'text'} />
          <Inputs placeholder={'Contraseña'} type={"password"} />
          <h3 className="login__olvidasteContra">Olvidaste tu constraseña</h3>
          <button className="button">Ingresar</button>
        </section>

        <section className="login__redesDiv">
          <p>O ingresa con:</p>
          <div className="login__iconsDiv">
            <img src={google} />
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={instagram}/>
          </div>
        </section>

        <section className="login__registroDiv">
          <h3>¿Primera vez en Efipuntos?</h3><h3 className="login__registroOption">Regístrate</h3>
        </section>

      </section>
    </div>
  );
}

export default Login;