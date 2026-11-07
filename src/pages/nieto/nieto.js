import React from 'react';
import './nieto.css';
import axios from 'axios';

const createUser = (e) => {
    e.preventDefault();

    const createData = {
        firstName: "João",
        status: "Disponivel",
        birthDate: "2003-09-21T18:19:31.966Z",
        lastName: "Vitor",
        username: "JoaoVitor2",
        description: "Lorem ipsun, lorem lorem",
        email: "joaovitor2@gmail.com",
        password: "senhaQ!1dojoao",
        isAdmin: true,
        state: "SC",
        profilePicture: "U3dhZ2dlciByb2Nrcw=="
    }

    const loginData = {
        login: "JoaoVitor1",
        password: "senhaQ!1dojoao",
    }

    axios.post('http://localhost:3000/user/create', createData)
        .then(cadastroResponse => {
            console.info(cadastroResponse.data);
            alert("Cadastro sucesso: " + cadastroResponse.status);

            axios.post('http://localhost:3000/auth/login', loginData)
                .then(loginResponse => {
                    sessionStorage.setItem('accessToken', loginResponse.data);
                    console.info(loginResponse);
                    alert("Login sucesso: " + loginResponse.status);
                })
                .catch(loginError => {
                    console.error(loginError.response);
                    alert("Login erro: " + loginError.status);
                })
        })
        .catch(cadastroErro => {
            console.error(cadastroErro.data)
            alert("Cadastro erro: " + cadastroErro.status)
        })
}

const loginUser = (e) => {
    e.preventDefault();

    const loginData = {
        login: "JoaoVitor1",
        password: "senhaQ!1dojoao",
    }

    axios.post('http://localhost:3000/auth/login', loginData)
        .then(loginResponse => {
            sessionStorage.setItem('accessToken', loginResponse.data);
            console.info(loginResponse.data);
            alert("Login sucesso: " + loginResponse.status);
        })
        .catch(loginError => {
            console.error(loginError.response);
            alert("Login erro: " + loginError.status);
        })
}

const editUser = (e) => {
    e.preventDefault();

    const editData = {
        "hardSkills": [
            "Desenvolvimento_web"
        ],
        "softSkills": [
            "Trabalho_em_equipe"
        ],
        "studyArea": [
            "Ciencia_da_Computacao"
        ],
        "status": "Disponivel",
        "description": "Deu certo, editei!!!",
        "isAdmin": true,
        "profilePicture": "U3dhZ2dlciByb2Nrcw==",
        "isSearchingForProjects": true
    }

    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        const config = {
            headers: {
                Authorization: accessToken,
            },
        };

        let nomeDoUser = "JoaoVitor1";

        axios.patch(`http://localhost:3000/user/update/${nomeDoUser}`, editData, config)
            .then(res => {
                console.info(res.data);
                alert("EDITOU: " + res.status)
            })
            .catch(error => {
                alert("N EDITOU")
                console.error(error.response)
            });
    } else {
        alert('Token de acesso não encontrado. Faça login primeiro.');
    }
}


const removerSessionStorage = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('accessToken');
}

const seguirUser = (e) => {
    e.preventDefault();


    const loginData = {
        login: "JoaoVitor1",
        password: "senhaQ!1dojoao",
    }

    axios.post('http://localhost:3000/auth/login', loginData)
        .then(loginResponse => {
            sessionStorage.setItem('accessToken', loginResponse.data);
            console.info(loginResponse.data);
            alert("Login sucesso: " + loginResponse.status);

            const accessToken = sessionStorage.getItem('accessToken');

            if (accessToken) {
                const config = {
                    headers: {
                        Authorization: accessToken,
                    },
                };

                axios.patch(`http://localhost:3000/user/follow/21/20`, null, config)
                    .then(res => {
                        console.info(res.data);
                        alert("Seguiu: " + res.status)
                    })
                    .catch(error => {
                        alert("N Seguiu")
                        console.error(error.response)
                    });
            } else {
                alert("FUDEU TUDo")
            }

        })
        .catch(loginError => {
            console.error(loginError.response);
            alert("Login erro: " + loginError.status);
        })
}
export default function Nieto() {
    return (
        <div className='Nieto'>
            <button onClick={createUser} >Cadastrar</button>
            <button onClick={editUser} >Editar</button>
            <button onClick={loginUser} >Logar</button>
            <button onClick={seguirUser} >Seguir</button>
            <br />
            <button onClick={removerSessionStorage} >Remover Session Storage</button>
        </div>
    );
}