import React from "react";





interface Header {
    titulo:string;
    descripcion:string;

}

const Header: React.FC<Header> = ({titulo,descripcion}) => {

    return (

        <header className='header'>
            <h1>{titulo}</h1>
            <h4 className="header__descrip">{descripcion}</h4>





        </header>


    );
}




export default Header;