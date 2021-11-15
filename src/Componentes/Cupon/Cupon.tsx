import * as React from 'react';
import CuponElem from './CuponElem/CuponElem';
import CuponActivo from './CuponElem/CuponActivo';
import CuponMenu from './CuponMenu';
import {
    BrowserRouter as Router,
    Outlet
} from "react-router-dom";




const Cupon: React.FC<{}> = () => {
    return (
        <article >
            <CuponMenu/>
            <Outlet/>
        </article>
    );
}

export default Cupon;