import React from "react"
import logo from './logo.ico'
import './navBarCadastro.css'
import { Link, useNavigate } from "react-router-dom";

function NavBarCadastro() {

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/')
    setTimeout(() => {
      const loginSection = document.getElementById('login')
      if (loginSection) {
        loginSection.scrollIntoView()
      }
    }, 500)
  }

  const goToAboutUs = () => {
    navigate('/')
    setTimeout(() => {
      const aboutUsSection = document.getElementById('aboutUs')
      if (aboutUsSection) {
        aboutUsSection.scrollIntoView()
      }
    }, 500)
  }

  return (
    <div className='NavBarCadastro'>
      <header>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
            <li className='logoFlex'>
              <Link to={'/'}><img src={logo} alt='logo' id='logo' /></Link>
              <p>Skills</p>
            </li>
            <ul className='links'>
              <li><a style={{ color: '#003DA5' }} href="#aboutUs" onClick={goToAboutUs}>Quem somos?</a></li>
              <li><a style={{ color: '#FF8200' }} href="/cadastro">Cadastre-se</a></li>
              <li><a style={{ color: '#003DA5' }} href="#login" onClick={goToLogin}>Login</a></li>
            </ul>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBarCadastro;