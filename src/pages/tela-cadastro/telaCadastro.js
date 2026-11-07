import './telaCadastro.css';
import React, { useState } from 'react';
import NavBar from './Components/navBar-cadastro/navBarCadastro';
import desenho from './img/desenho.png';
import { FirstInputs } from './Components/Inputs/FirstInputs/firstInputs.js';
import SecondInputs from './Components/Inputs/SecondInputs/secondInputs.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TelaCadastro() {

    //para navegar entre as telas
    const navigate = useNavigate();

    //para receber os dados de FirstInput
    const [dataFirstInputs, setDataFirstInputs] = useState([]);
    const getFirstInputsData = (data) => {
        setDataFirstInputs(data)
    }

    const [dataSecondInputs, setDataSecontInputs] = useState([])
    const getSecondInputsData = (data) => {
        setDataSecontInputs(data)
    }

    //Criar usuário a partir dos dados do front e mandar para o back-end
    const createUser = () => {

        //cria um objeto 'user' com os dados vindos dos inputs
        const user = {
            firstName: dataFirstInputs.firstName,
            status: "Disponivel",
            birthDate: `${dataSecondInputs.birthDate}T00:00:00.000Z`,
            lastName: dataFirstInputs.lastName,
            username: dataFirstInputs.username,
            email: dataFirstInputs.email,
            password: dataSecondInputs.password,
            state: dataSecondInputs.state
        };

        console.log(user)

        //faz a requisição para o back-end efetivamente criar o usuario e cadastrar no banco
        //envia para a rota o objeto 'user'
        axios.post('http://localhost:3000/user/create', user)
            .then(response => {
                console.log(response);
                console.log(response.data);

                //2º etapa: após um cadastro bem-sucedido, o sistema irá automaticamente 'fazer um login', para receber a token
                //de acesso (accessToken), e poder então efetivamente logar no sistema

                //cria um objeto 'login' com os próprios dados bem-sucedidos do usuario recem cadastrado
                const loginInfos = {
                    login: user.username,
                    password: user.password
                }

                //chama a rota de login, enviando os dados a serem autenticados
                axios.post('http://localhost:3000/auth/login', loginInfos)
                    .then(response => {
                        console.log(response)
                        //uma vez autenticados, cadastra a accessToken no SessionStorage do navegador -> accessToken = chave de acesso
                        sessionStorage.setItem('accessToken', `Bearer ${response.data}`);
                        //redireciona o usuario para seu perfil
                        alert("Cadastro realizado com sucesso!")
                        navigate(`/${user.username}`)
                    })
                    .catch(error => {
                        console.log(error.response)
                        alert("Login erro: " + error.response.data.message);
                        goToLogin()
                    })
            })
            .catch(error => {
                console.log(error)
                if (error.response.data.message.length > 1) {
                    if (error.response.status != 409) {
                        alert(`Erro na validação dos dados!\nVerifique-os e tente novamete\nstatus: ${error.response.status}`)
                    } else {
                        alert(`${error.response.data.message}\nstatus: ${error.response.data.statusCode}`)
                    }
                } else {
                    alert(`${error.response.data.message}\nstatus: ${error.response.data.statusCode}`)
                }
                window.location.reload()
            });
    };

    /* 
    Aqui ocorre o seguinte: Deve existir uma interação entre TelaCadastro e FirstInputs (serve o mesmo para SecondInputs).
    Essa interação, sera por meio de parâmetros/propriedades. Primeiramente, observe oq foi feito em FirstInputs e dps volta aqui.
    Agora, 
    */
    const [divForInputsContent, setDivForInputsContent] = useState(<FirstInputs onFormUpdate={getFirstInputsData} />);
    const [showFirstButton, setShowButton] = useState(true);
    const [showSecondButtons, setBackButton] = useState(false);

    const changeForSecondInputs = () => {
        setDivForInputsContent(<SecondInputs onFormUpdate={getSecondInputsData} />);
        setShowButton(false);
        setBackButton(true);
    };

    const changeForFirstInputs = () => {
        setDivForInputsContent(<FirstInputs onFormUpdate={getFirstInputsData} />);
        setShowButton(true);
        setBackButton(false);
    };

    const goToLogin = () => {
        navigate('/')
        setTimeout(() => {
            const loginSection = document.getElementById('login')
            if (loginSection) {
                loginSection.scrollIntoView()
            }
        }, 500)
    }

    return (
        <div className="TelaCadastro">
            <NavBar />
            <div className="containers">
                <div className="left-container">
                    <div className="quadrado-branco">
                        <div>
                            <h1>S K I L L S</h1>
                            <h2>Bem vindo! Informe os dados abaixo para criar sua conta.</h2>
                        </div>
                        <div className="divForInputs">
                            {divForInputsContent}
                            <div className="button_submit">
                                {showFirstButton && (
                                    <button className="btt-toSecondInputs" onClick={changeForSecondInputs}>
                                        Próximo ➜
                                    </button>
                                )}
                                {showSecondButtons && (
                                    <button className="btt-backFirstInputs" onClick={changeForFirstInputs}>
                                        🠔
                                    </button>
                                )}
                                {showSecondButtons && (
                                    <button className="btt-createAccount" type="submit" onClick={createUser}>
                                        Criar uma conta ➞
                                    </button>
                                )}
                            </div>
                        </div>
                        <p className="p-login">
                            <span className="text">Já tem uma conta?</span>{' '}
                            <a style={{ color: '#FF8200', fontWeight: 'bold', textDecoration: 'underline' }} href="#login" onClick={goToLogin}>
                                Faça login
                            </a>
                        </p>
                    </div>
                </div>
                <div className="right-container">
                    <div className="div-bichinho">
                        <img src={desenho} alt="bichinho" className="bichinho"></img>
                    </div>
                    <div className="div-text">
                        <h1>
                            Bem vindo ao <span>S K I L L S</span> !
                        </h1>
                        <p>
                            Inicie sua jornada no <span className='strong-text'>S K I L L S</span>, onde você tem passe livre para se desafiar em
                            <span className='strong-text'> qualquer área</span> e crescer através da experiência do desenvolvimento de
                            <span className='strong-text'> projetos em equipes</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TelaCadastro;