import * as React from 'react';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";




const CuponMenu: React.FC<{}> = () => {


    const [selected, setSelected] = useState<string>();
    
   

    const handleSelected = (id: string) => {
        setSelected(id);
    }
    





    return (

        <nav className="cupones">
            <ul className="cupones__menu">
                <li>
                    <Link to={`todos`} className={selected === "linkTodos"? 'cupones__span cupones__span--selected' : 'cupones__span'} onClick={()=>{handleSelected("linkTodos")}}>
                        <span className="cupones__span__title " >Todos</span>
                        <div className={selected === "linkTodos"?  'cupones__span__line cupones__span__line--selected' : 'cupones__span__line'} ></div>
                    </Link>
                </li>
                <li>
                    <Link to={`activos`} className={selected === "linkActivos"? 'cupones__span cupones__span--selected' : 'cupones__span'} onClick={()=>{handleSelected("linkActivos")}}>
                        <span className="cupones__span__title">Activos</span>
                    </Link>
                </li>
                <li>
                    <Link to={`expirados`} className={selected === "linkExpi"? 'cupones__span cupones__span--selected' : 'cupones__span'} onClick={()=>{handleSelected("linkExpi")}}>
                        <span className="cupones__span__title">Expirados</span>
                    </Link>
                </li>
            </ul>
            <div className="cupones__line"></div>
        </nav>


    );


}

export default CuponMenu;