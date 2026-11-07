import React from 'react';
import './telaAboutUs.css';
import Logo from './img/logo.ico';
import TelaLogin from '../tela-login/login.js'
import TelaCarrossel from './tela-carrossel/telaCarrossel';

const TelaAboutUs = () => {

  return (
    <div className='mainPage'>
      <div className='TelaAboutUs'>
        <nav className='topo'>
          <ul className='lista'>
            <li>
              <img src={Logo} className='logo' alt="logo" />
              <figcaption className='legenda'>S K I L L S</figcaption>
            </li>
            <ul className='lista'>
              <li className='topics'><a className='redirect' href='#aboutUs'>Quem somos?</a></li>
              <li className='topics'><a className='redirect' href='/cadastro'>Cadastre-se</a></li>
              <li className='topics'><a className='redirect' href='#login'>Login</a></li>
            </ul>
          </ul>
        </nav>
        <div className='welcome'>
          <h1 className='nome'>S K I L L S</h1>
          <p className='slogan'>Encontre os parceiros <span className='laranja'>ideais</span> para os seus projetos</p>
          <a href='#aboutUs'>
            <button className='btn' htype="button">Saiba mais</button>
          </a>
        </div>
      </div>
      <div id='aboutUs'>
        <TelaCarrossel />
      </div>
      <div id='login'>
        <TelaLogin />
      </div>
    </div>
  );
}

export default TelaAboutUs;