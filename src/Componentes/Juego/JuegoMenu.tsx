import * as React from 'react';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";




const JuegoMenu: React.FC<{}> = () => {


    const [selected, setSelected] = useState<string>("linkJuegos");
    
   

    const handleSelected = (id: string) => {
        setSelected(id);
        
    }
    





    return (

        <nav className="juegos">
            <ul className="juegos__menu">
                <li>
                    <Link to={`juegos`} className={selected === "linkJuegos"? 'juegos__span juegos__span--selected' : 'juegos__span'} onClick={()=>{handleSelected("linkJuegos")}}>
                        <span className="juegos__span__title " >Juegos</span>
                        <div className={selected === "linkJuegos"?  'juegos__span__line juegos__span__line--selected' : 'juegos__span__line'} ></div>
                    </Link>
                </li>
                <li>
                    <Link to={`retos`} className={selected === "linkRetos"? 'juegos__span juegos__span--selected' : 'juegos__span'} onClick={()=>{handleSelected("linkRetos")}}>
                        <span className="juegos__span__title">Retos</span>
                        <div className={selected === "linkRetos"?  'juegos__span__line juegos__span__line--selected' : 'juegos__span__line'} ></div>
                    </Link>
                </li>
                
            </ul>
            <div className="juegos__line"></div>
        </nav>


    );


}

export default JuegoMenu;