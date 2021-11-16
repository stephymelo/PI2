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
} from "react-router-dom";
import CuponElem from '../Cupon/CuponElem/CuponElem';
import CuponActivo from '../Cupon/CuponElem/CuponActivo';
import { CuponObj } from '../../Types/CuponObj';





function App() {

  const [users, setUsers] = useState<PerfilObj[]>([]);
  const [isRegister, SetIsRegister] = useState<boolean>(false);
  console.log(users);
  const LoginContainer = () => {
    return <Routes><Route path="/" element={
      <Register setUsers={setUsers} users={users} ></Register>

    }></Route></Routes>

  }


  const [cuponElems,setCuponElems] = React.useState<CuponObj[]>([
    {
      id:0,
      titulo: 'descuento',
      descripcion: 'aa',
      fechaVencer: '30-20-20',
      imagenUrl: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
      codigoActivable:'A00897',
      status:'activo'
     },
     {
      id:1,
      titulo: 'descuento',
      descripcion: 'aa',
      fechaVencer: '30-20-20',
      imagenUrl: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
      codigoActivable:'A00897',
      status:'activo'
     },
     {
      id:2,
      titulo: 'descuento',
      descripcion: 'aa',
      fechaVencer: '30-20-20',
      imagenUrl: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
      codigoActivable:'A00897',
      status:'activo'
     }
       
 
   ]);

   const handleCreate = (newCuponElem: { title: string, descripcion: string, fechaVencer: string, imagenUrl: string, codigoActivable: string, status: 'activo' }) => {
    const newArray = [
      ...cuponElems,
      {
        id: Math.random(),
        titulo: newCuponElem.title,
        descripcion: newCuponElem.descripcion,
        fechaVencer: newCuponElem.fechaVencer,
        imagenUrl: newCuponElem.imagenUrl,
        codigoActivable: newCuponElem.codigoActivable,
        status: newCuponElem.status

      }
    ];
    setCuponElems(newArray);
  }


  const AllCupones: Function = (groups: any[]): JSX.Element[] => {
    return (cuponElems.map((elem) => {
      return <CuponElem key={elem.id} {...elem} status="activo"  />;
    }));
  }


  

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
          
          <Route path='todos' element={<div className="allCupones"><AllCupones/></div>} />


          <Route path='activos' element={<CuponActivo/>} />
          <Route path='expirados' element={<CuponActivo/>} />

        </Route>
        <Route path="/juegos" element={
          <div>
            <Header
              titulo={'Juegos'}
              descripcion={'Juega para ganar cupones exclusivos de nuestros productos'} />
            <Juego id={0} titulo={''} description={''} placeholderImg={''} cupon={{
              id: 0,
              titulo: '',
              fechaVencer: '0',
              descripcion: '',
              imagenUrl: '',
              codigoActivable: '',
              status:"activo"
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

        <Route path="/login" element={
          <div>
            <Login id={0} nombre={''} username={''} contra={''} correo={''} fechaNacimiento={0} preferencias={[]} genero={''} ciudad={''} direccion={undefined} telefono={undefined} />
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
          <Route path="/" element={<LoginContainer />} />
          <Route path="/menu/*" element={<DefaultContainer />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
