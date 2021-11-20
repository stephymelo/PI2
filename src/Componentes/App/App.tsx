import React, { useEffect, useState } from 'react';
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
import { CuponObj } from '../../Types/CuponObj';
import { CuponPopup } from '../Cupon/CuponElem/CuponPopup';





function App() {

  

  const [users, setUsers] = useState<PerfilObj[]>([]);
  const [currentIDUser, setCurrentIDUser] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<PerfilObj>({
    id: 0,
    nombre: 'userBase',
    username: 'userBase',
    contra: '0000',
    correo: 'userBase@gmail.com',
    fechaNacimiento: 8122012,
    preferencias: [],
    genero: '',
    ciudad: 'Tangamandapio',
    direccion: '',
    telefono: 11111110,
  });

  useEffect(() => {

    users.forEach(user => {
      console.log({ user });
      if (user.id === currentIDUser) {
        setCurrentUser(user);
      }
    })
    console.log("Llega aqui");
  }, [currentIDUser]);

  const getLoginUser = (id: number) => {

    setCurrentIDUser(id);
  }

  const addNewUser = (user: PerfilObj) => {
    setUsers(
      [...users, user]
    )
  }
  
  const [cuponElems, setCuponElems] = React.useState<CuponObj[]>([
    {
      id: 0,
      titulo: 'descuento',
      descripcion: 'aa',
      fechaVencer: '30-20-20',
      imagenUrl: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
      codigoActivable: 'A00897',
      status: 'noactivos'
    },
    {
      id: 1,
      titulo: 'descuento',
      descripcion: 'aa',
      fechaVencer: '30-20-20',
      imagenUrl: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
      codigoActivable: 'A00897',
      status: 'noactivos'
    },
    {
      id: 2,
      titulo: 'descuento',
      descripcion: 'aa',
      fechaVencer: '30-20-20',
      imagenUrl: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
      codigoActivable: 'A00897',
      status: 'noactivos'
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
      return <CuponElem key={elem.id} {...elem} />;
    }));
  }

  console.log({ currentUser });
  const LoginContainer = () => {
    return <>
      <Routes>


        <Route path="/" element={
          <Login users={users} getLoginUser={getLoginUser}></Login>
        }></Route>

        <Route path="/registro" element={
          <Register setUsers={setUsers} getLoginUser={getLoginUser} addNewUser={addNewUser}></Register>
        }></Route>

      </Routes>
      <Outlet></Outlet>
    </>
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

          <Route path='todos' element={<div className="allCupones"><AllCupones /> <CuponPopup />
          
          
          </div>} />
          <Route path='activos' element={<CuponActivo />} />
          <Route path='expirados' element={<CuponActivo />} />

        </Route>
        <Route path="/juegos" element={
          <div>
            <Header
              titulo={'Juegos'}
              descripcion={'Juega para ganar cupones exclusivos de nuestros productos'} />
            <Juego />
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
            <Perfil currentUser={currentUser} />
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
