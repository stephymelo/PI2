import React, { useState } from 'react';
import './App.css';
import Menu from './../Menu/Menu';
import Header from '../Header/Header';
import Register from './../Register/Register'
import Cupon from '../Cupon/Cupon';
import Descuento from '../Descuento/Descuento';
import Juego from '../Juego/Juego';
import Perfil from '../Perfil/Perfil';
import Login from '../Login/Login';
import { PerfilObj } from '../../Types/PerfilObj';


import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
  Outlet,
} from "react-router-dom";
import CuponElem from '../Cupon/CuponElem/CuponElem';
import CuponActivo from '../Cupon/CuponElem/CuponActivo';





function App() {

  const [users, setUsers] = useState<PerfilObj[]>([]);
  const [isRegister, SetIsRegister] = useState<boolean>(false);

  const LoginContainer = () => {
    return <> 
    <Routes>


      <Route path="/" element={
        <Login></Login>
      }></Route>

      <Route path="/registro" element={
        <Register setUsers={setUsers} users={users} ></Register>
      }></Route>

    </Routes>
    <Outlet></Outlet> 
    </>
  }

  // function MasCupones () {
  //   return (


  //       <Routes>
  //         <Route path='/miscupones/:id' element={<p>Totales</p>} />
  //       </Routes>

  //   )
  // }



  const DefaultContainer = () => {
    return <>
      <Menu />


      <Routes>
        <Route path="miscupones/" element={
          <><Header
            titulo={'Cupones'}
            descripcion={'Nuestros cupones son de un solo uso'} />
            <Cupon />
          </>}>

          <Route path='todos' element={<CuponElem />} />
          <Route path='activos' element={<CuponActivo />} />
          <Route path='expirados' element={<CuponActivo />} />




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
              codigoActivable: '',
              status: "activo"
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
            <Perfil id={0} nombre={''} username={''} contra={''} correo={''} fechaNacimiento={0} preferencias={[]} genero={''} ciudad={''} direccion={''} telefono={0} />
          </div>
        }>

        </Route>


      </Routes>
      <Outlet></Outlet>

    </>
  }


  return (

    <div className="App">


      <HashRouter>
        <Routes>
          <Route path="/*" element={<LoginContainer />} />
          <Route path="/menu/*" element={<DefaultContainer />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
