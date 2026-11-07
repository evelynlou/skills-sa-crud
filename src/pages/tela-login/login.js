import './login.css';
import boneco from './img/login.png';
import logo from './img/logo_login.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function TelaLogin() {

  const navigate = useNavigate()

  const [login, setUserLogin] = useState('')
  const handleLogin = (htmlInputLogin) => {
    setUserLogin(htmlInputLogin.target.value)
  }

  const [password, setUserPassword] = useState('')
  const handlePassword = (htmlInputPassword) => {
    setUserPassword(htmlInputPassword.target.value)
  }

  const userLogin = (e) => {

    e.preventDefault();

    const loginInfos = {
      login: login,
      password: password
    }

    axios.post('http://localhost:3000/auth/login', loginInfos)
      .then(response => {
        console.log(response)
        sessionStorage.setItem('accessToken', `Bearer ${response.data}`);
        alert(`Login sucesso!\nstatus: ${response.status}`);

        const config = {
          headers: {
            Authorization: sessionStorage.getItem('accessToken')
          }
        }

        axios.get('http://localhost:3000/auth/profile', config)
          .then(response => {
            console.log(response)
            navigate(`/${response.data.username}`)
          })
          .catch(error => {
            console.log(error.response)
          })

      })
      .catch(error => {
        console.log(error)
        alert(`${error.response.data.message}\nstatus: ${error.response.status}`);
      })
  }

  const alertInDev = () => {
    alert("Página em constrção!")
  }

  return (
    <div className='TelaLogin'>
      <div className="div-toGroup">

        <div className="div-merchan">
          <p className="p1-merchan"> <img className="logoLogin" src={logo} alt="logo" /> Aprimore suas <strong className='strong-login'>skills!</strong> </p>
          <p className="p-merchan"> Para nos mantermos <strong className='strong-login'>conectados</strong>, entre com suas credenciais.</p>
          <img className="boneco" src={boneco} alt="login" />
        </div>

        <div className='div-login'>

          <div className='div-login-top'>
            <h1>S K I L L S</h1>
          </div>

          <form onSubmit={userLogin}>
            <div className='div-inputs'>
              <input type="text" className='login-inputs' placeholder='Usuário ou E-mail' id='user-login' onInput={handleLogin} required /> <br></br>
              <input type="password" className='login-inputs' placeholder='Senha' id='user-password' onInput={handlePassword} required />
            </div>
            <div className='div-links'>
              <p className='p-senha'><span onClick={alertInDev}>Esqueceu a senha?</span></p>
              <button className="botao-submit" type="submit">Entrar</button>
              <p className='p-conta'><span>Não tem uma conta?</span> <a className='a-login' href='/cadastro'>Cadastre-se</a></p>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}

export default TelaLogin; 