import React, { useState } from 'react';
import "./formacao.css";
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import add from './add.png';

function Formacao() {

    const alertInDev = () => {
        alert("Página em construção!")
    }

    const exp = [{
        id_experience: "1",
        id_user: "..",
        id_instituition: "Unisul",
        id_studyArea: "Sistemas de Informação",
        area: "Engenharia/ Tecnologia",
        beginDate: "Fev 2023",
        endDate: "2026",
        experience_description: "2° graduação... Cursando bacharelado em Sistemas de informação. Sou apaixonado pela área <3 Aprendendo muito sobre coletar, armazenar, processar, analisar e distribuir informações por meio de tecnologias, incluindo hardware, software e rede.",
    }, {
        id_experience: "1",
        id_user: "Disponível_para_participar",
        id_instituition: "UDESC",
        id_studyArea: "Marketing",
        area: "Ciências Humanas",
        beginDate: "Jun 2021",
        endDate: "2023",
        experience_description: "Formado em Marketing pela UDESC. Uma graduação que me permitiu evoluir em todos os quesitos! Especialista em compreender as necessidades dos clientes e elaborar estratégias de comunicação e venda de produtos e serviços.",
    }, {
        id_experience: "2",
        id_user: "Disponível_para_participar",
        id_instituition: "SENAI",
        id_studyArea: "Ensino Médio",
        area: "Geral",
        beginDate: "Jun 2021",
        endDate: "2023",
        experience_description: "Cursei o ensino médio completo no SENAI, onde pude crescer como ser humano e adquirir conhecimentos básicos e técnicos",
    }];

    const respostaAPI = [
        { name: "", itens: exp },
    ];

    return (
        <div className='formacao'>

            <div className='header'>
                <ul className='exp_header'>
                    <li className='page_title'>
                        <div className='title'>
                            <p className='title'>Formações</p>
                        </div>
                    </li>
                    <li className='exp_add'>
                        <div className='add'>
                            <span><img className="add" src={add} onClick={alertInDev} /></span>
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
                                            <div>
                                                {itens.id_experience == 1 ? (
                                                    <div className='exp_icon' style={{ backgroundColor: '#1F71FF' }}>
                                                        <HiOutlineAcademicCap style={{
                                                            fontSize: 45,
                                                            paddingTop: 7,
                                                            paddingLeft: 8
                                                        }} />
                                                    </div>
                                                ) : (
                                                    <div className='exp_icon' style={{ backgroundColor: '#FFA647' }}>
                                                        <HiOutlineAcademicCap style={{
                                                            fontSize: 45,
                                                            paddingTop: 7,
                                                            paddingLeft: 8
                                                        }} />
                                                    </div>
                                                )
                                                }
                                            </div>
                                            <div className='info'>
                                                <h3>{itens.id_instituition}</h3>
                                                <p><strong>Graduação - </strong> {itens.id_studyArea}</p>
                                                <p><strong>Área: </strong> {itens.area}</p>
                                            </div>
                                            <div className='data_e_funcao'>
                                                <p>{itens.beginDate} - {itens.endDate}</p>
                                                <p id='funcoes'><strong>Descrição:</strong></p>
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
        </div>
    );
}

export default Formacao;