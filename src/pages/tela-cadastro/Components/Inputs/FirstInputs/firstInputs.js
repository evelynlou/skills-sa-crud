import './firstInputs.css';

// props é um 'objeto'/'propriedade' de FirstInputs, que receberá algo sempre que esse componente (FirstInputs) for chamado.
//Em nosso caso, 'props' receberá
export const FirstInputs = (props) => {

    const handleInputUpdate = () => {

        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const username = document.getElementById('username').value
        const email = document.getElementById('email').value

        const data = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email
        }

        // console.log(data)

        props.onFormUpdate(data); //função 'definida' no componente pai como se fosse um atributo de FirstInputs
    }

    return (
        <div className="FirstInputs">
            <div className="nome">
                <input
                    type="text"
                    className="primeiro_nome"
                    id="firstName"
                    placeholder="Primeiro Nome"
                    onChange={handleInputUpdate}
                />
                <input
                    type="text"
                    className="ultimo_nome"
                    id="lastName"
                    placeholder="Último Nome"
                    onChange={handleInputUpdate}
                />
            </div>
            <div className="user_email">
                <input
                    type="text"
                    className="usuario"
                    id="username"
                    placeholder="Nome de usuário"
                    onChange={handleInputUpdate}
                />
                <input
                    type="text"
                    className="email"
                    id="email"
                    placeholder="E-mail"
                    onChange={handleInputUpdate}
                />
            </div>
        </div>
    );
};
