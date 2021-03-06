import { type } from 'os';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Genero } from '../../Types/Genero';
import { PerfilObj } from "../../Types/PerfilObj";
import Inputs from '../Utils/Inputs/Inputs';
import back from "../../Recursos/imagenes/util/BackArrow.svg";
import e from "../../Recursos/imagenes/register/e.png";



export type RegisterProp =  {
  setUsers : React.Dispatch<React.SetStateAction<PerfilObj[]>>;
  addNewUser : (user: PerfilObj) => void;
  getLoginUser :  (id: number) => void;
  }

export const Register: React.FC<RegisterProp> = ({setUsers, addNewUser,getLoginUser}) => {
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
},[newUser]);


  const updateNewUser = (objEnter : PerfilObj) =>{
    setNewUser(objEnter);
    setIsComplete(true);
  };

  const addUser = () =>{
    
      
    if(password === confirmedPassword){
      

      
      navigate("/preferences");
      getLoginUser(newUser.id);
      addNewUser(newUser);
      
    }
    
    
  }
    return (
    
        <article className='register'>
          <img className="register__img" src={e}/>
          <img className="register__arrowBack" src={back} alt="returnLogin" onClick={()=>{navigate(-1)}} />
        <section className='register__content'>
          <h1 className='register__title'>REGISTRO</h1>
          <form className='register__inputs'>
              <Inputs placeholder={'Nombre Completo'} type={'text'} handleChange={handlenameChange}/>
              <Inputs placeholder={'Usuario'} type={'text'} handleChange={handleUsernameChange}/>
              <Inputs placeholder={'Correo el??ctronico'} type={"text"} handleChange={handleCorreoChange}/> 
              <Inputs placeholder={'Contrase??a'} type={"password"} handleChange={handlePasswordChange} />
              <Inputs placeholder={'Confirmar Contrase??a'} type={"password"} handleChange={handleConfirmedPasswordChange}/>
              <Inputs placeholder={'Fecha de nacimiento'} type="date" handleChange={handleDateChange} />
              <Inputs placeholder={'G??nero'} type="text" handleChangeSelect={handleGeneroChange} select={'select'}/>
              <Inputs placeholder='Ciudad' type="text" handleChange={handleCiudadChange}/>
              <Inputs placeholder='Direcci??n' type="text" handleChange={handleDireccionChange}/>
              <Inputs placeholder='Tel??fono' type="number" handleChange={handleTelefonoChange}/>
              <button className ="button" onClick={RegisterUserAction} >Registrarme</button>
            </form>
     
        </section>

        
       

    </article>

        

    
    );
}

export default Register;