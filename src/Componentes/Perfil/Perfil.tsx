import * as React from 'react';
import { PerfilObj } from "../../Types/PerfilObj";
import settings from "../../Recursos/logos/IconosSVG/settings.svg";
import call from "../../Recursos/logos/IconosSVG/call.svg";
import zigZag from "../../Recursos/logos/IconosSVG/zigzagPerfil.svg";
import lock from "../../Recursos/logos/IconosSVG/lock.svg";
import calender from "../../Recursos/logos/IconosSVG/calender.svg";
import view from "../../Recursos/logos/IconosSVG/ojito.svg";
import jorge from "../../Recursos/imagenes/perfil/jorge.png";
import particula from "../../Recursos/imagenes/perfil/particula.svg";
import editPic from "../../Recursos/imagenes/perfil/editPicBtn.png";
import perfil from "../../Recursos/logos/IconosSVG/perfil.svg";

export type PerfilProp =   {
    currentUser : PerfilObj;
}

const Perfil: React.FC<PerfilProp> = ({ currentUser }) => {

    return (

        <div>
            <header className="profileHeader">

                <section className="profileHeader__background">
                    <img className="particle particle__1" src={particula}/>
                    <img className="particle particle__2" src={particula}/>
                    <img className="particle particle__3" src={particula}/>
                    <img className="particle particle__4" src={particula}/>
                    <img className="particle particle__5" src={particula}/>
                    <img className="particle particle__6" src={particula}/>
                    <img className="particle particle__7" src={particula}/>
                    <img className="particle particle__8" src={particula}/>
                </section>

                <div className="profileHeader__allInfoHeader">

                    <section className="profileHeader__optionsDiv">
                        <h1 className="titles">Perfil</h1>
                        <img className="profileHeader__settingsIcon" src={settings} alt="profileHeader" />
                    </section>

                    <section className="profileHeader__pictureDiv">
                        <div className="profileHeader__onlyPictureDiv">
                            <img className="profileHeader__picture" src={jorge} alt="user__icon" />
                            <button className="profileHeader__editPicBtn">
                                <img src={editPic}/></button>
                        </div>
                        <h3 className="profileHeader__nameUser">{currentUser.nombre}</h3>
                    </section>
                </div>
            </header>

            <img className="profileHeader__picos" src={zigZag} />

            <section className="dataUserDiv">

                <section className="dataUser">
                    <img className="dataUser__icon" src={perfil} alt="user__icon" />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Nombre y apellido</h2>
                        <h3 className="dataUser__text">{currentUser.nombre}</h3>
                    </div>
                </section>

                <section className="dataUser">
                    <img className="dataUser__icon" src={call} alt="user__phone" />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Celular</h2>
                        <h3 className="dataUser__text">{currentUser.telefono}</h3>
                    </div>
                </section>

                <section className="dataUser">
                    <img className="dataUser__icon" src={calender} alt="user__calender" />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Fecha de nacimiento</h2>
                        <h3 className="dataUser__text">{currentUser.fechaNacimiento}</h3>
                    </div>
                </section>

                <section className="dataUser">
                    <img className="dataUser__icon" src={lock} alt="user__password" />
                    <div className="dataUser__infoDiv">
                        <h2 className="dataUser__title">Contraseña</h2>
                        <h3 className="dataUser__text">{currentUser.contra}</h3>
                    </div>
                    <img className="dataUser__icon viewIcon" src={view} alt="user__lock" />
                </section>
            </section>
        </div>

    );
}

export default Perfil;