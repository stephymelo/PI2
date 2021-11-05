class Register {
    render(){
        return `
        <div class='register'>
            <div class='register__content'>
                <h1 class='register__title'>REGISTRO</h1>
                <div class='register__inputs'>
                    <input type='text' class='textfield__input' placeholder='Nombre y Apellido'></input>
                    <input type='text' class='textfield__input' placeholder='Usuario'></input>
                    <input type='text' class='textfield__input' placeholder='Celular'></input>
                    <input type='text' class='textfield__input' placeholder='Fecha de nacimiento'></input>
                    <input type='password' class='textfield__input' placeholder='Contraseña'></input>
                    <input type='password' class='textfield__input' placeholder='Confirmar contraseña'></input>
                    <button class ="button">Registrarme</button>

                </div>
                <div class='register__btn'></div>
            </div>

        </div>`;
    }
}

export default Register;