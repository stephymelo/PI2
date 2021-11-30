import * as React from 'react';
import { PerfilObj } from "../../Types/PerfilObj";
import Inputs from '../Utils/Inputs/Inputs';


import background from "../../Recursos/logos/IconosSVG/backgroundLogin.svg";
import google from "../../Recursos/logos/IconosSVG/google.svg";
import facebook from "../../Recursos/logos/IconosSVG/facebook.svg";
import twitter from "../../Recursos/logos/IconosSVG/twitter.svg";
import instagram from "../../Recursos/logos/IconosSVG/instagram.svg";
import { useNavigate } from 'react-router-dom';
import Perfil from '../Perfil/Perfil';

export type LoginProp =  {
  users : PerfilObj[],
  getLoginUser :  (id: number) => void

}

const Login: React.FC<LoginProp> = ({ users, getLoginUser}) => {

  const alert = React.useRef<HTMLDivElement>(null);
  const handleLogin = () =>{
    
    /* users.forEach(user =>{
      
      if(username === user.username && password === user.contra){
        console.log("Dsnole")
        getLoginUser(user.id);
        navigate("menu/perfil")
      } else {
        console.log(user.username + " Bna contra")
        if(alert.current){
          alert.current!.innerText = "Contraseña y usuario incorrectos por favor verifique";
          setTimeout(() =>{
            alert.current!.innerText = "";
          },5000);
        }
        
      }
      
    }) */
    if(username === "Eficacia" && password === "Efipuntos"){
        console.log("Dsnole")
        navigate("menu/miscupones/todos");
    }
  }

  
  let navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setUsername(event.target.value);
  }

  const [password, setPassword] = React.useState('');
  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setPassword(event.target.value);
  }


  return (
    <div>
      <section className="login">

        <img className="login__background" src={background} />

        <section className="login__inputsDiv">

          <h1 className="login__title">BIENVENIDO DE NUEVO</h1>
          <Inputs placeholder={'Usuario'} type={'text'} handleChange={handleUsernameChange}/>
          <Inputs placeholder={'Contraseña'} type={"password"}  handleChange={handlePasswordChange}/>
          <h3 className="login__olvidasteContra">Olvidaste tu constraseña</h3>
          <h3 className="login__alertDialog" ref={alert}></h3> 
          <button className="button" onClick={handleLogin}>Ingresar</button>
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
          <h3>¿Primera vez en Efipuntos?</h3><h3 className="login__registroOption" onClick={ () =>{navigate("../registro")}}>Regístrate</h3>
        </section>

      </section>
    </div>
  );
}

export default Login;