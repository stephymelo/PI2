import * as React from 'react';
import polet from "../../Recursos/imagenes/productos/polet.png";
import zenu from "../../Recursos/imagenes/productos/zenu.png"
import festival from "../../Recursos/imagenes/productos/festivalfresa.png"
import colcafe from "../../Recursos/imagenes/productos/colcafe.png"
import { DescuentoObj } from "../../Types/DescuentoObj";



export type DescuentoProp = DescuentoObj & {



}

const Descuento: React.FC<DescuentoProp> = ({ }) => {
  return (
    <div className="dicountList">
      <article className="cardDiscount">
        <div className="cardDiscount__left">
          <img className="cardDiscount__img" src={zenu} />
        </div>
        <div className="cardDiscount__right">
          <h2 className="cardDiscount__title">2X1 Salchichas Zenú</h2>
          <p className="cardDiscount__descrip">Promoción 2 por 1 en <br /> los productos.</p>
          <div className="cardDiscount__infoUbi">
            <svg className="ubi" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3931 8.04347C14.3931 10.7281 10.7813 14.1186 8.92496 15.6839C8.29885 16.2119 7.40283 16.2119 6.77672 15.6839C4.92037 14.1186 1.30859 10.7281 1.30859 8.04347C1.30859 4.43028 4.23766 1.50122 7.85084 1.50122C11.464 1.50122 14.3931 4.43028 14.3931 8.04347Z" stroke="#605EA7" stroke-width="1.84722" />
              <ellipse cx="7.85037" cy="8.04373" rx="1.96267" ry="1.96267" stroke="#605EA7" stroke-width="1.84722" />
            </svg>
            <p className="sub">*Tiendas afiliadas que tienen <br /> la promoción.</p>
          </div>
        </div>
      </article>
      <article className="cardDiscount">
        <div className="cardDiscount__left cardDiscount__left--brown">
          <img className="cardDiscount__img" src={polet} />
        </div>
        <div className="cardDiscount__right">
          <h2 className="cardDiscount__title">15% Polet Macadamia</h2>
          <p className="cardDiscount__descrip">Promoción 12 unidades <br /> paletas Polet Macadamia</p>
          <div className="cardDiscount__infoUbi">
            <svg className="ubi" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3931 8.04347C14.3931 10.7281 10.7813 14.1186 8.92496 15.6839C8.29885 16.2119 7.40283 16.2119 6.77672 15.6839C4.92037 14.1186 1.30859 10.7281 1.30859 8.04347C1.30859 4.43028 4.23766 1.50122 7.85084 1.50122C11.464 1.50122 14.3931 4.43028 14.3931 8.04347Z" stroke="#605EA7" stroke-width="1.84722" />
              <ellipse cx="7.85037" cy="8.04373" rx="1.96267" ry="1.96267" stroke="#605EA7" stroke-width="1.84722" />
            </svg>
            <p className="sub">*Tiendas afiliadas que tienen <br /> la promoción.</p>
          </div>
        </div>
      </article>
      <article className="cardDiscount">
        <div className="cardDiscount__left cardDiscount__left--pink">
          <img className="cardDiscount__img" src={festival} />
        </div>
        <div className="cardDiscount__right">
          <h2 className="cardDiscount__title">10% Festival Fresa </h2>
          <p className="cardDiscount__descrip">Promoción 12 unidades en los<br />productos seleccionados.</p>
          <div className="cardDiscount__infoUbi">
            <svg className="ubi" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3931 8.04347C14.3931 10.7281 10.7813 14.1186 8.92496 15.6839C8.29885 16.2119 7.40283 16.2119 6.77672 15.6839C4.92037 14.1186 1.30859 10.7281 1.30859 8.04347C1.30859 4.43028 4.23766 1.50122 7.85084 1.50122C11.464 1.50122 14.3931 4.43028 14.3931 8.04347Z" stroke="#605EA7" stroke-width="1.84722" />
              <ellipse cx="7.85037" cy="8.04373" rx="1.96267" ry="1.96267" stroke="#605EA7" stroke-width="1.84722" />
            </svg>
            <p className="sub">*Tiendas afiliadas que tienen <br /> la promoción.</p>
          </div>
        </div>
      </article>
      <article className="cardDiscount">
        <div className="cardDiscount__left">
          <img className="cardDiscount__img" src={colcafe} />
        </div>
        <div className="cardDiscount__right">
          <h2 className="cardDiscount__title">2X1 Colcafe Clásico </h2>
          <p className="cardDiscount__descrip">Promoción 2 por 1 en<br />los productos.</p>
          <div className="cardDiscount__infoUbi">
            <svg className="ubi" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3931 8.04347C14.3931 10.7281 10.7813 14.1186 8.92496 15.6839C8.29885 16.2119 7.40283 16.2119 6.77672 15.6839C4.92037 14.1186 1.30859 10.7281 1.30859 8.04347C1.30859 4.43028 4.23766 1.50122 7.85084 1.50122C11.464 1.50122 14.3931 4.43028 14.3931 8.04347Z" stroke="#605EA7" stroke-width="1.84722" />
              <ellipse cx="7.85037" cy="8.04373" rx="1.96267" ry="1.96267" stroke="#605EA7" stroke-width="1.84722" />
            </svg>
            <p className="sub">*Tiendas afiliadas que tienen <br /> la promoción.</p>
          </div>
        </div>
      </article>

    </div>
  );
}


///className="ubi"
export default Descuento;