import './secondInputs.css';
import Data from './../Data/data.js'
import { useState } from 'react';

function SecondInputs(props) {

    // const verificarSenhasIguais = () => {
    //     const senha = document.getElementById('senha').value;
    //     const confirmarSenha = document.getElementById('confirmar_senha').value;
    //     if (senha === confirmarSenha) {
    //         alert('Senhas iguais')
    //         return true;
    //     } else {
    //         alert('Senhas incorretas')
    //     }
    // }

    const [userBirthDate, setBirthDate] = useState()
    const getBirthDate = (birthDate) => {
        setBirthDate(birthDate)
    }

    const handleInputUpdate = () => {

        const birthDate = userBirthDate
        const state = document.getElementById('state').value
        const password = document.getElementById('senha').value

        const data = {
            birthDate: birthDate,
            state: state,
            password: password
        }

        props.onFormUpdate(data)
    }

    return (
        <div className='SecondInputs'>
            <Data onDateUpdate={getBirthDate}></Data>
            <select className='unidades' placeholder='Unidade Federativa' id='state'>
                <option disabled>Seleciona seu estado</option>
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="BA">Bahia (BA)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="TO">Tocantins (TO)</option>
            </select>
            <div className="credenciais">
                <input type="password" className="senha" id="senha" placeholder='Senha' onChange={handleInputUpdate} /><br />
                <input type="password" className="confirmar_senha" id="confirmar_senha" placeholder='Confirmar senha' /><br />
            </div>
        </div>
    );
}

export default SecondInputs;