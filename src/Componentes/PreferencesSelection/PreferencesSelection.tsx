import React from 'react';
import lacteos from "../../Recursos/imagenes/preferences/lacteos.png";
import carnes from "../../Recursos/imagenes/preferences/carnes.png";
import granos from "../../Recursos/imagenes/preferences/granos.png";
import pasta from "../../Recursos/imagenes/preferences/pasta.png";
import cereales from "../../Recursos/imagenes/preferences/cereales.png";
import iceCream from "../../Recursos/imagenes/preferences/iceCream.png";
import aseo from "../../Recursos/imagenes/preferences/aseo.png";
import aseoPersonal from "../../Recursos/imagenes/preferences/aseoPersonal.png";
import alcohol from "../../Recursos/imagenes/preferences/alcohol.png";

interface PreferencesSelection {

}

const PreferencesSelection: React.FC<PreferencesSelection> = ({ }) => {
    return (

        <section className="preferencesDiv">
            <h1 className="titles">¿Qué tipo de productos consumes regularmente?</h1>
            <h3 className="subtitles">Elige los tipos de productos que más te interesan</h3>

            <section className="preferenceOptionDiv">
                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={lacteos}></img>
                    <h3 className="preferenceOption__title">Lacteos</h3>
                </div>

                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={carnes}></img>
                    <h3 className="preferenceOption__title">Carnes frias</h3>
                </div>

                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={granos}></img>
                    <h3 className="preferenceOption__title">Granos</h3>
                </div>

                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={pasta}></img>
                    <h3 className="preferenceOption__title">Pasta</h3>
                </div>

                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={cereales}></img>
                    <h3 className="preferenceOption__title">Cereales</h3>
                </div>

                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={iceCream}></img>
                    <h3 className="preferenceOption__title">Helado</h3>
                </div>

                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={aseo}></img>
                    <h3 className="preferenceOption__title">Aseo</h3>
                </div>

                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={aseoPersonal}></img>
                    <h3 className="preferenceOption__title">Aseo personal</h3>
                </div>


                <div className="preferenceOption">
                    <img className="preferenceOption__img" src={alcohol}></img>
                    <h3 className="preferenceOption__title">Alcohol</h3>
                </div>
            </section>
        </section>
    );

}

export default PreferencesSelection;