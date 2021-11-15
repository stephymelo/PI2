import * as React from 'react';
import { CuponObj } from "../../Types/CuponObj";
import CuponElem from './CuponElem/CuponElem';
import CuponActivo from './CuponElem/CuponActivo';
import CuponMenu from './CuponMenu';

import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Routes,
    Link,
    useRoutes,
    useLocation,
    matchRoutes,
    useParams,
    Outlet
} from "react-router-dom";







 
const Cupon: React.FC<{}> = () => {
    return (
        <article >
            <CuponMenu/>
            <Outlet />
        </article>
    );
}

export default Cupon;