import * as React from 'react';
import { PerfilObj } from "../../Types/PerfilObj";
import settings from "../../Recursos/logos/IconosSVG/settings.svg";
import call from "../../Recursos/logos/IconosSVG/call.svg";
import zigZag from "../../Recursos/logos/IconosSVG/cuponZigzag.svg";
import lock from "../../Recursos/logos/IconosSVG/lock.svg";
import calender from "../../Recursos/logos/IconosSVG/calender.svg";
import view from "../../Recursos/logos/IconosSVG/ojito.svg";
import jorge from "../../Recursos/imagenes/perfil/jorge.png";


export type PerfilProp = PerfilObj & {

}

const Perfil: React.FC<PerfilProp> = ({ }) => {
    
    return (

        <div>
            <header className="profileHeader">
                <section className="profileHeader__optionsDiv">
                    <h1 className="titles">Perfil</h1>
                    <img className="profileHeader__settingsIcon" src={settings} />
                </section>

                <div className="profileHeader__pictureDiv">
                    <img className="profileHeader__picture" src={jorge} />
                    <h3 className="subtitles">Jorge Giraldo</h3>
                </div>
            </header>
            <img className="profileHeader__picos" src={zigZag} />

            <section className="dataUserDiv">

                <section className="dataUser">
                    <img className="dataUser__icon" src={jorge} />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Nombre y apellido</h2>
                        <h3 className="dataUser__text">Jorge Giraldo</h3>
                    </div>
                </section>

                <section className="dataUser">
                    <img className="dataUser__icon" src={call} />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Celular</h2>
                        <h3 className="dataUser__text">301-5267896</h3>
                    </div>
                </section>

                <section className="dataUser">
                    <img className="dataUser__icon" src={calender} />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Fecha de nacimiento</h2>
                        <h3 className="dataUser__text">13-09-1990</h3>
                    </div>
                </section>

                <section className="dataUser">
                    <img className="dataUser__icon" src={lock} />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Contraseña</h2>
                        <h3 className="dataUser__text">************</h3>
                    </div>
                    <img className="dataUser__icon viewIcon" src={view} />
                </section>
            </section>
        </div>

    );
}

export default Perfil;