import './style.css'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

const register = new Register();
const login = new Login();

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = true ? register.render() : login.render();
