import React, { useState } from 'react';
import "./Certificados.css";
import icone from '../img/icone.png';
import add from '../img/add.png';
import ModalCertificados from './Components/ModalCertificados.js';
import { AiOutlineExport } from 'react-icons/ai'

function Certificados() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    // const [showRegister, setshowRegister] = useState(false);
    const exp = [{
        id_certificate: "..",
        id_user: "..",
        id_instituition: "SENAI/SC",
        id_studyArea: "Engenharia / Tecnologia",
        certificate_name: "Tecnologias 4.0",
        beginDate: "Fev 2023",
        endDate: "2026",
        url: "",
    }, {
        id_certificate: "..",
        id_user: "..",
        id_instituition: "SENAI/SC",
        id_studyArea: "Engenharia / Tecnologia",
        certificate_name: "Scrum",
        beginDate: "Maio 2023",
        endDate: "2026",
        url: "",
    }, {
        id_certificate: "..",
        id_user: "..",
        id_instituition: "SENAI/SC",
        id_studyArea: "Engenharia / Tecnologia",
        certificate_name: "Versionamento",
        beginDate: "Jul 2023",
        endDate: "2026",
        url: "",
    }, {
        id_certificate: "..",
        id_user: "..",
        id_instituition: "SENAI/SC",
        id_studyArea: "Engenharia / Tecnologia",
        certificate_name: "Dev Back-End",
        beginDate: "Ago 2023",
        endDate: "2026",
        url: "",
    }, {
        id_certificate: "..",
        id_user: "..",
        id_instituition: "SENAI/SC",
        id_studyArea: "Engenharia / Tecnologia",
        certificate_name: "API's",
        beginDate: "Março 2023",
        endDate: "2026",
        url: "",
    }];

    const respostaAPI = [
        { name: "", itens: exp },
    ];


    // const handleNotRegister = () => {
    //     setshowRegister(true);
    // }

    // if (showRegister) {
    //     return <InputCertificados />;
    // }

    const alertInDev = () => {
        alert("Página em construção!")
      }

    return (
        <div className='certificados'>
            <div className='header'>
                <ul className='exp_header'>
                    <li className='page_title'>
                        <div className='title'>
                            <p className='title'>Certificados</p>
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
                    <div className='profile_card_body_real-oficial-grid'>
                        {respostaAPI.map((e, index) => (
                            <div id={index} className='profile_card_body_real-oficial' key={index}>
                                <div className='profile_card_body_title'>
                                    <p> {e.name} </p>
                                </div>
                                <div className='profile_card_body_content_certificados'>
                                    <ul className='test-certificados'>
                                        {e.itens.map((itens, subIndex) => (
                                            <li className='card_itens_certificados' key={subIndex}>
                                                <div className='align'>
                                                    <div className='exp_icon'>
                                                        <span>
                                                            <img className="icone-certificados" src={icone} />
                                                        </span>
                                                    </div>

                                                    <div className='certificados_info'>
                                                        <h3>{itens.certificate_name}</h3>
                                                        <p>{itens.id_instituition}</p>
                                                        <p>{itens.beginDate}</p>
                                                        <div className='button_certificado'>
                                                            <button className='exibir_credencial' onClick={alertInDev}>Exibir credencial <AiOutlineExport /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className='button_certificado'>
                                                    <button className='exibir_credencial'>Exibir credencial</button>
                                                </div> */}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalCertificados isOpen={isModalOpen} onClose={toggleModal} />}
        </div>
    );
}

export default Certificados;