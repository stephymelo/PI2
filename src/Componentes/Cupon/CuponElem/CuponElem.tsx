import React from "react";
import './cuponElem.scss'



interface CuponElem {

}

const CuponElem: React.FC<CuponElem> = ({ }) => {

    return (
        <article className='cupon'>
            <div className='cupon__section--1'>
                <img className='cupon__img'></img>
            </div>
            <div className='cupon__section--2'>
                <h2>25% en galletas</h2>
            </div>
            <div className='cupon__section--3'>
                <h3>Vence en 2 dias</h3>
                <p>30-10-2021</p>
            </div>
        </article>


    );
}




export default CuponElem;