import React from "react";



  interface Inputs {
      placeholder: string,
      type:   'text'|'password'| 'date'| 'number',
      handleChange? : React.ChangeEventHandler<HTMLInputElement>,
      select? : 'input'| 'select',
      handleChangeSelect?: React.ChangeEventHandler<HTMLSelectElement>,
}

const Inputs: React.FC<Inputs> = ({placeholder, type,handleChange, select = 'input', handleChangeSelect }) => {

    return( 
       

<div className="textfield">
{
select === 'input' && <input type={type} className='textfield__input' placeholder={placeholder} onChange={handleChange}></input>

}
{
  select === 'select' && <select  className='textfield__input' onChange={handleChangeSelect}>
    <option value="">Seleccione un Género</option>
    <option value="Femenino">Femenino</option>
    <option value="Masculino">Masculino</option>
  </select>
}

</div>
    
       
);
}




  export default Inputs; 