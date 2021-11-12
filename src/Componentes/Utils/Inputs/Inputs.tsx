import React from "react";



  interface Inputs {
      placeholder: string,
      type:   'text'|'password'| 'date'| 'number',
}

const Inputs: React.FC<Inputs> = ({placeholder, type }) => {

    return( 
       

<div className="textfield">

<input type={type} className='textfield__input' placeholder={placeholder}></input>

</div>
    
       
);
}




  export default Inputs; 