import { type } from 'os';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Genero } from '../../Types/Genero';
import { PerfilObj } from "../../Types/PerfilObj";
import Inputs from '../Utils/Inputs/Inputs';
import back from "../../Recursos/imagenes/util/BackArrow.svg";



export type RegisterProp =  {
  setUsers : React.Dispatch<React.SetStateAction<PerfilObj[]>>;
  users : PerfilObj[];
  }

export const Register: React.FC<RegisterProp> = ({setUsers, users}) => {
  let [isComplete, setIsComplete]  = React.useState(false);
  const [name, setname] = React.useState('');
  const handlenameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setname(event.target.value);
      console.log({name});
  }

  const [username, setUsername] = React.useState('');
  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setUsername(event.target.value);
  }

  const [password, setPassword] = React.useState('');
  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setPassword(event.target.value);
  }

  const [confirmedPassword, setConfirmedPassword] = React.useState('');
  const handleConfirmedPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setConfirmedPassword(event.target.value);
  }

  const [correo, setCorreo] = React.useState('');
  const handleCorreoChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setCorreo(event.target.value);
  }

  const [date, setDate] = React.useState(0);
  const handleDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setDate(Number.parseInt(event.target.value));
  }

  const [genero, setGenero] = React.useState('');
  const handleGeneroChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      setGenero(event.target.value);
  }

  const [ciudad, setCiudad] = React.useState('');
  const handleCiudadChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setCiudad(event.target.value);
  }

  const [direccion, setDireccion] = React.useState('');
  const handleDireccionChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setDireccion(event.target.value);
  }

  const [telefono, setTelefono] = React.useState(0);
  const handleTelefonoChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setTelefono(Number.parseInt(event.target.value));
  }

  let navigate = useNavigate();

  const [newUser, setNewUser] = useState<PerfilObj>({
    id : Math.random(),
    nombre : name,
    username : username,
    contra : password ,
    correo : correo,
    fechaNacimiento : date,
    preferencias : [],
    genero:  genero as Genero,
    ciudad: ciudad,
    direccion: direccion,
    telefono: telefono,

  });
  
  const obj: PerfilObj = {
      
    id : Math.random(),
    nombre : name,
    username : username,
    contra : password,
    correo : correo,
    fechaNacimiento : date,
    preferencias : [],
    genero:  genero as Genero,
    ciudad: ciudad,
    direccion: direccion,
    telefono: telefono,

  
}


  const RegisterUserAction = (event: any) =>{
    event.preventDefault();
    updateNewUser( obj );

  }

  
useEffect(()=>{
   if(isComplete){
    addUser();
   }
    console.log({isComplete});
},[newUser]);


  const updateNewUser = (objEnter : PerfilObj) =>{
    setNewUser(objEnter);
    setIsComplete(true);
  };

  console.log({newUser});
  const addUser = () =>{
    
      console.log("DUN");
    if(password === confirmedPassword){
      
      setUsers(
        [...users, newUser]
      )
      
      navigate("/menu/*");
      
      
    }
    
    
  }
    return (
    
        <article className='register'>
        <section className='register__content'>
          <img src={back} alt="returnLogin" onClick={()=>{navigate(-1)}} />
            <h1 className='register__title'>REGISTRO</h1>
            <form className='register__inputs'>
              <Inputs placeholder={'Nombre Completo'} type={'text'} handleChange={handlenameChange}/>
              <Inputs placeholder={'Usuario'} type={'text'} handleChange={handleUsernameChange}/>
              <Inputs placeholder={'Correo eléctronico'} type={"text"} handleChange={handleCorreoChange}/> 
              <Inputs placeholder={'Contraseña'} type={"password"} handleChange={handlePasswordChange} />
              <Inputs placeholder={'Confirmar Contraseña'} type={"password"} handleChange={handleConfirmedPasswordChange}/>
              <Inputs placeholder={'Fecha de nacimiento'} type="date" handleChange={handleDateChange} />
              <Inputs placeholder={'Género'} type="text" handleChangeSelect={handleGeneroChange} select={'select'}/>
              <Inputs placeholder='Ciudad' type="text" handleChange={handleCiudadChange}/>
              <Inputs placeholder='Dirección' type="text" handleChange={handleDireccionChange}/>
              <Inputs placeholder='Teléfono' type="number" handleChange={handleTelefonoChange}/>
              <button className ="button" onClick={RegisterUserAction} >Registrarme</button>
            </form>
     
        </section>

        
       

    </article>

        

    
    );
}

export default Register;