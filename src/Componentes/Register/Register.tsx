import * as React from 'react';
import './Register.scss';
import { PerfilObj } from "../../Types/PerfilObj";



export type RegisterProp = PerfilObj & {

  
  
  }

const Register: React.FC<RegisterProp> = ({id,nombre,username,contra,correo,fechaNacimiento,preferencias }) => {
    return (
        <div>


        <button className ="button">Registrarme</button>

        </div>
    );
}

export default Register;