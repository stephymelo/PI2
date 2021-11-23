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
import { CuponQR } from '../Cupon/CuponElem/CuponQR';
import { RetoDesc } from '../Juego/RetoDesc/RetoDesc';
import { RetoFoto } from '../Juego/RetoFoto/RetoFoto';
import PreferencesSelection from '../PreferencesSelection/PreferencesSelection';
import CuponExpirado from '../Cupon/CuponElem/CuponExpirado';
import { JuegoElem } from '../Juego/JuegoElem/JuegoElem';
import { RetoElem } from '../Juego/JuegoElem/RetoElem';
import colcafeLogo from "../../../Recursos/imagenes/productLogos/pietranResize.png"





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
      id: 3,
      titulo: '25% Jamones Pietran',
      descripcion: 'Vence en 2 días ',
      fechaVencer: '25-11-21',
      imagenUrl: 'https://www.pietran.com.co/wp-content/themes/pietran/images/Pietran-con-conservantes-naturales.png',
      codigoActivable: 'A00897',
      status: 'noactivos',
      color: '#775BA3',
    },
    {
      id: 1,
      titulo: '10% en galletas Tosh',
      descripcion: 'Vence en 7 días',
      fechaVencer: '30-11-21',
      imagenUrl: 'https://tosh.com.co/wp-content/uploads/2021/03/logo-tosh.png',
      codigoActivable: 'A00897',
      status: 'noactivos',
      color: '#629540'
    },
    {
      id: 2,
      titulo: '2x1 pastas Dorias',
      descripcion: 'Vence en 12 días',
      fechaVencer: '03-12-21',
      imagenUrl: 'https://www.pastasdoria.com/sites/default/files/inline-images/logo-doria_0_0.png',
      codigoActivable: 'A00897',
      status: 'noactivos',
      color: '#052B52'
    }


  ]);

  const [cuponSelected, SetCuponSelected] = React.useState<number>();
  const [openCuponQR, SetOpenCuponQR] = React.useState<boolean>(false);

  const handleCreate = (newCuponElem: { title: string, descripcion: string, fechaVencer: string, imagenUrl: string, codigoActivable: string, status: 'activo', color: string }) => {
    const newArray = [
      ...cuponElems,
      {
        id: Math.random(),
        titulo: newCuponElem.title,
        descripcion: newCuponElem.descripcion,
        fechaVencer: newCuponElem.fechaVencer,
        imagenUrl: newCuponElem.imagenUrl,
        codigoActivable: newCuponElem.codigoActivable,
        status: newCuponElem.status,
        color: newCuponElem.color

      }
    ];
    setCuponElems(newArray);
  }


  const AllCupones: Function = (groups: any[]): JSX.Element[] => {
    return (cuponElems.map((elem) => {
      return <CuponElem key={elem.id} {...elem} SetCuponSelected={SetCuponSelected} />;
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

        <Route path="/preferences" element={
          <PreferencesSelection currentUser={currentUser} setUsers={setUsers} setCurrentUser={setCurrentUser} users={users} ></PreferencesSelection>
        }></Route>

      </Routes>
      <Outlet></Outlet>
    </>
  }



  const DefaultContainer = () => {
    console.log({ cuponElems });
    return <>
      <Menu />
      <Routes>

        {/* MIS CUPONES RUTAS */}
        <Route path="miscupones/" element={
          <><Header
            titulo={'Cupones'}
            descripcion={'Nuestros cupones son de un solo uso'} />
            <Cupon />
          </>}>

          <Route path='todos' element={<div className="allCupones">
            <AllCupones />
            {cuponSelected ? <CuponPopup cuponElems={cuponElems} cuponSelected={cuponSelected} SetCuponSelected={SetCuponSelected} setCuponElems={setCuponElems} /> : <h1></h1>}
          </div>} />
          <Route path='activos' element={<div className="contenedorCuponActivo">

            <CuponActivo handleOpenQR={() => {
              SetOpenCuponQR(true);
            }} />

            {openCuponQR && <div className="blurQR"></div>};


            {openCuponQR && <CuponQR handleCloseQR={() => {
              SetOpenCuponQR(false);
            }} />}
          </div>} />
          <Route path='expirados' element={<CuponExpirado />} />

        </Route>


        {/* JUEGOS RUTAS */}
        <Route path="juegos/*" element={
          <><Header
            titulo={'Juegos'}
            descripcion={'Juega para ganar cupones exclusivos'} />
            <Juego />
          </>}>

          <Route path='juegos' element={<div>
            <JuegoElem />
          </div>} />
          <Route path='retos' element={<RetoElem />} />
        </Route>


          {/* RETOS */}
        <Route path='retoDesc' element={
        <><Header
          titulo={'Reto'}
          descripcion={'Gana premios por realizar los retos con los productos seleccionados'}/> <RetoDesc/>
          </>}> 
          </Route>

        <Route path='retoFoto' element={
        <><Header
          titulo={'Reto'}
          descripcion={'Toma una fotografia del reto finalizado'} />
          <RetoFoto /></>}>
          </Route>





        {/* DESCUENTO */}
        <Route path="/descuentos" element={<div>
          <Header
            titulo={'Descuentos'}
            descripcion={'Conozca los descuentos disponibles en las diferentes tiendas'} />
          <Descuento id={0} titulo={''} fechaVencer={0} descripcion={''} imagenUrl={''} codigoActivable={''} />

        </div>}>

        </Route>
        <Route path="/perfil" element={<div>
          <Perfil currentUser={currentUser} />
        </div>}>

        </Route>

        </Routes>
        

   
        
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


