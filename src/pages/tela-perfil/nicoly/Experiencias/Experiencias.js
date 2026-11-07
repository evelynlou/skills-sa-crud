import React, { useState } from 'react';
import "./Experiencias.css";
import icone from '../img/icone.png';
import add from '../img/add.png';
import ModalExperiencias from './Components/ModalExp.jsx';


function Experiencias() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const exp = [{
        id_experience: "..",
        id_user: "..",
        id_instituition: "Intelbras",
        id_studyArea: "Engenharia / Tecnologia",
        role: "Desenvolvedor Back-End",
        beginDate: "Fev 2023",
        endDate: "2026",
        experience_description: "Programação com JavaScript e Node.js, integração com banco de dados (relacional e linguagem SQL), versionamento de código com git e monitoramento de performance",
    }, {
        id_experience: "..",
        id_user: "Disponível_para_participar",
        id_instituition: "Santander",
        id_studyArea: "Ciências Humanas",
        role: "Assistente de Marketing",
        beginDate: "Jun 2021",
        endDate: "2023",
        experience_description: "Auxiliar de acompanhamento de desempenho de vendas e fornecedores, prestador de suporte de agência de propaganda, controlador de notas fiscais, apoio em negociações, implementação de campanhas publicitárias e de vendas.",
    }];

    const respostaAPI = [
        { name: "", itens: exp },
    ];

    return (
        <div className='experiencia'>

            <div className='header'>
                <ul className='exp_header'>
                    <li className='page_title'>
                        <div className='title'>
                            <p className='title'>Experiências</p>
                        </div>
                    </li>
                    <li className='exp_add'>
                        <div className='add'>
                            <span><img className="add" src={add} onClick={toggleModal} /></span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='profile_card'>
                <div className='profile_card_body' id='profileCardBody'>
                    {respostaAPI.map((e, index) => (
                        <div id={index} className='profile_card_body_real-oficial' key={index}>
                            <div className='profile_card_body_title'>
                                <p> {e.name} </p>
                            </div>
                            <div className='profile_card_body_content'>
                                <ul className='test'>
                                    {e.itens.map((itens, subIndex) => (
                                        <li className={`card_itens`} key={subIndex}>
                                            <div className='exp_icon'>
                                                <span>
                                                    <img className="icone-exp" src={icone} />
                                                </span>
                                            </div>
                                            <div className='info'>
                                                <h3>{itens.id_instituition}</h3>
                                                <p><strong>Área:</strong> {itens.id_studyArea}</p>
                                                <p><strong>Cargo:</strong> {itens.role}</p>
                                            </div>
                                            <div className='data_e_funcao'>
                                                <p>{itens.beginDate} - {itens.endDate}</p>
                                                <p id='funcoes'><strong>Funções:</strong></p>
                                                <p>{itens.experience_description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && <ModalExperiencias isOpen={isModalOpen} onClose={toggleModal} />}
        </div>
    );
}

export default Experiencias;