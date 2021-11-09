import * as React from 'react'; 
import { CuponObj } from "../../Types/CuponObj";
import CuponElem from './CuponElem/CuponElem';




export type CuponProp = CuponObj & {

  
  
  }

const Cupon: React.FC<CuponProp> = ({id,titulo,descripcion,fechaVencer,imagenUrl,codigoActivable}) => {
    return (
        <article className="cupones">
            <CuponElem/>




        </article>
    );
}

export default Cupon;