import * as React from 'react'; 
import { CuponObj } from "../../Types/CuponObj";



export type CuponProp = CuponObj & {

  
  
  }

const Cupon: React.FC<CuponProp> = ({id,titulo,descripcion,fechaVencer,imagenUrl,codigoActivable}) => {
    return (
        <div></div>
    );
}

export default Cupon;