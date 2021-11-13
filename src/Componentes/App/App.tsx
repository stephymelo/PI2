import React, { useState } from 'react';
import './App.css';
import Menu from './../Menu/Menu';
import Header from '../Header/Header';
import Register from './../Register/Register'
import Cupon from '../Cupon/Cupon';
import Descuento from '../Descuento/Descuento';
import Juego from '../Juego/Juego';
import Perfil from '../Perfil/Perfil';

import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes} from "react-router-dom";
import { PerfilObj } from '../../Types/PerfilObj';




function App() {

  const [users, setUsers] = useState<PerfilObj[]>([]);
  const [isRegister,SetIsRegister] = useState<boolean>(false);
  console.log(users);
  const LoginContainer = () => {
    return <Routes><Route path="/" element={
      <Register setUsers={setUsers} users={users} ></Register>
      
  }></Route></Routes>
    
  }

  const DefaultContainer = () => {
    return <>
     <Menu />
      

      <Routes>
      <Route path="/miscupones" element={
          <div>
            <Header
              titulo={'Cupones'}
              descripcion={'Nuestros cupones son de un solo uso'} />
            <Cupon id={0} titulo={''} fechaVencer={0} descripcion={''} imagenUrl={''} codigoActivable={''} />



          </div>} >



        </Route>
        <Route path="/juegos" element={
          <div>
            <Header
              titulo={'Juegos'}
              descripcion={'Juega para ganar cupones exclusivos de nuestros productos'} />
            <Juego id={0} titulo={''} description={''} placeholderImg={''} cupon={{
              id: 0,
              titulo: '',
              fechaVencer: 0,
              descripcion: '',
              imagenUrl: '',
              codigoActivable: ''
            }} />
          </div>
        }>

        </Route>
        <Route path="/descuentos" element={
          <div>
            <Header
              titulo={'Descuentos'}
              descripcion={'Conozca los descuentos disponibles en las diferentes tiendas'} />
            <Descuento id={0} titulo={''} fechaVencer={0} descripcion={''} imagenUrl={''} codigoActivable={''} />

          </div>
        }>

        </Route>
        <Route path="/perfil" element={
          <div>
            <Perfil />
          </div>
        }>

        </Route>
      </Routes>

  

     
    </>
  }


  return (

    <div className="App">


      <HashRouter>
        <Routes>
          <Route path="/"  element={<LoginContainer/>}/>
          <Route path="/menu/*" element={<DefaultContainer/>}/>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
