import React, { useState } from 'react';
import lacteos from "../../Recursos/imagenes/preferences/lacteos.png";
import carnes from "../../Recursos/imagenes/preferences/carnes.png";
import granos from "../../Recursos/imagenes/preferences/granos.png";
import pasta from "../../Recursos/imagenes/preferences/pasta.png";
import cereales from "../../Recursos/imagenes/preferences/cereales.png";
import iceCream from "../../Recursos/imagenes/preferences/iceCream.png";
import aseo from "../../Recursos/imagenes/preferences/aseo.png";
import aseoPersonal from "../../Recursos/imagenes/preferences/aseoPersonal.png";
import alcohol from "../../Recursos/imagenes/preferences/alcohol.png";
import { useNavigate } from 'react-router-dom';
import { PerfilObj } from '../../Types/PerfilObj';


interface PreferencesSelection {
    users : PerfilObj[];
    setUsers : React.Dispatch<React.SetStateAction<PerfilObj[]>>,
    currentUser: PerfilObj,
    setCurrentUser: React.Dispatch<React.SetStateAction<PerfilObj>>,
}

const PreferencesSelection: React.FC<PreferencesSelection> = ({setUsers, currentUser, setCurrentUser, users }) => {

    let navigate = useNavigate();
    const [preferencesSelected, setPreferencesSelected] = useState<string[]>([]);

    const handleSelected = (id: string) => {
        let selected = preferencesSelected;
        if(selected.includes(id)){
            selected = selected.filter(select => select != id)
            
        }else{
            selected = [id, ...preferencesSelected];
            
        }
        setPreferencesSelected(selected);
        
        
        

    }
    

    const handleUpdatePreferences = () => {
        const editUsers = [...users];
        const indexSelected = users.findIndex(user => currentUser.id === user.id)
        editUsers[indexSelected] = {
            ...currentUser, 
            preferencias : preferencesSelected
        }
        setCurrentUser(editUsers[indexSelected]);
        setUsers(editUsers);
        setPreferencesSelected([]);
        
        navigate("/menu/miscupones/todos");
    }
    console.log({preferencesSelected});
    return (
        <article className="containerPreferences">
            <section className="preferencesDiv">
                <h1 className="titles">¿Qué tipo de productos consumes regularmente?</h1>
                <h3 className="subtitles">Elige los tipos de productos que más te interesan</h3>

                <section className="preferenceOptionDiv">
                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("lacteos")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>{handleSelected("lacteos")}} src={lacteos} ></img>
                        <h3 className="preferenceOption__title">Lacteos</h3>
                    </div>

                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("carnes")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("carnes")} src={carnes} ></img>
                        <h3 className="preferenceOption__title">Carnes frias</h3>
                    </div>

                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("granos")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("granos")} src={granos} ></img>
                        <h3 className="preferenceOption__title">Granos</h3>
                    </div>

                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("pasta")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("pasta")} src={pasta} ></img>
                        <h3 className="preferenceOption__title">Pasta</h3>
                    </div>

                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("cereales")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("cereales")} src={cereales} ></img>
                        <h3 className="preferenceOption__title">Cereales</h3>
                    </div>

                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("iceCream")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("iceCream")} src={iceCream} ></img>
                        <h3 className="preferenceOption__title">Helado</h3>
                    </div>

                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("aseo")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("aseo")} src={aseo} ></img>
                        <h3 className="preferenceOption__title">Aseo</h3>
                    </div>

                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("aseoPersonal")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("aseoPersonal")} src={aseoPersonal} ></img>
                        <h3 className="preferenceOption__title">Aseo personal</h3>
                    </div>


                    <div className="preferenceOption">
                        <img className={preferencesSelected.includes("alcohol")? "preferenceOption__img preferenceOption__img--selected":"preferenceOption__img"} onClick={()=>handleSelected("alcohol")} src={alcohol} ></img>
                        <h3 className="preferenceOption__title">Alcohol</h3>
                    </div>
                </section>
                <button className="button button--1" onClick={handleUpdatePreferences}>Continuar</button>
            </section>
        </article>

    );

}

export default PreferencesSelection;