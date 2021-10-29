import './style.css'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Menu from './components/Menu';


const register = new Register();
const login = new Login();
const menu = new Menu();

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = false ? register.render() : login.render() ; menu.render();
