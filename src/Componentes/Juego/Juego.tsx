import * as React from 'react';
import JuegoMenu from './JuegoMenu';
import {
    BrowserRouter as Router,
    Outlet
} from "react-router-dom";




const Juego: React.FC<{}> = ({ }) => {




    return (
        <article >
            <JuegoMenu />
            <Outlet />
        </article>

    );
}

export default Juego;