import React from 'react';
import './App.css';
import Menu from './../Menu/Menu';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
} from "react-router-dom";



function App() {
  return (
    
    <div className="App">
      
       <Menu />


       <HashRouter>
         <Routes>
           <Route path="/miscupones">

           </Route>
           <Route path="/juegos">

           </Route>
           <Route path="/descuentos">

           </Route>
           <Route path="/perfil">

           </Route>
           
         </Routes>
       </HashRouter>

    </div>
  );
}

export default App;
