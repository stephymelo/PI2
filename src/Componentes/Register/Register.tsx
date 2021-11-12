import { type } from 'os';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PerfilObj } from "../../Types/PerfilObj";
import Inputs from '../Utils/Inputs/Inputs';



export type RegisterProp =  {

  
  }

export const Register: React.FC<RegisterProp> = () => {
  let navigate = useNavigate();
  const [newUser, setNewUser] = useState<PerfilObj>({
    id : 0,
    nombre : '',
    username : '',
    contra : '',
    correo : '',
    fechaNacimiento : 0,
    preferencias : [],
  })
  
  const registerUserAction = () =>{
    
    navigate("/menu");
  }
    return (
    
        <article className='register'>
        <section className='register__content'>
            <h1 className='register__title'>REGISTRO</h1>
            <div className='register__inputs'>
              <Inputs placeholder={'Nombre Completo'} type={'text'}/>
              <Inputs placeholder={'Usuario'} type={'text'}/>
              <Inputs placeholder={'Correo eléctronico'} type={"text"} />
              <Inputs placeholder={'Contraseña'} type={"password"} />
              <Inputs placeholder={'Confirmar Contraseña'} type={"password"} />
              <Inputs placeholder={'Fecha de nacimiento'} type="date" />
              <Inputs placeholder={'Género'} type="text"/>
              <Inputs placeholder='Ciudad' type="text" />
              <Inputs placeholder='Dirección' type="text" />
              <Inputs placeholder='Teléfono' type="number" />
            </div>
     
        </section>

        <button className ="button" onClick={registerUserAction}>Registrarme</button>
       

    </article>

        

    
    );
}

export default Register;