import React, { useState } from "react";
import "./Projetos.css";
import { Botao } from "../Components/Btt-newProject/botao.js";
import Modal from "../Components/Modal-newProject/modal-project.js";

/*imagens -> react-icons*/
// import icone from "../img/icone.png";
import { CiEdit } from 'react-icons/ci'

// import Img from "./img.js";
// import ImgLaranja from "./imgLaranja";
import { BsFillPersonFill } from 'react-icons/bs'

// import EditProjeto from "./edit.js";
// import axios from "axios";
// import { useEffect } from "react";

function Projetos({ user }) {
  // const [showRegister, setshowRegister] = useState(false);s
  const [data, setData] = useState([]);
  const liderando = [
    {
      projectTitle: "Construção do banco de dados",
      status: "Disponível_para_participar",
      occupationArea: "Engenharia_ou_Tecnologia",
      modalidaty: "Presencial",
      duration: "2 meses",
      description: "Construção do banco de dados do projeto Skills",
    }
  ];

  const participando = [
    {
      projectTitle: "Construção do Front-end",
      status: "Indisponível_para_participar",
      occupationArea: "Engenharia_ou_Tecnologia",
      modalidaty: "Presencial",
      duration: "2 meses",
      description: "Construção do front-end do projeto Skills",
    },
    {
      projectTitle: "Construção do Front-end",
      status: "Disponível_para_participar",
      occupationArea: "Engenharia_ou_Tecnologia",
      modalidaty: "Presencial",
      duration: "2 meses",
      description: "Construção do front-end do projeto Skills",
    }
  ];

  const concluido = [
    {
      projectTitle: "Construção do Back-end",
      status: "concluido",
      occupationArea: "Engenharia_ou_Tecnologia",
      modalidaty: "Presencial",
      duration: "2 meses",
      description: "Construção do back-end do projeto Skills",
    },
    {
      projectTitle: "Construção do Back-end",
      status: "concluido",
      occupationArea: "Engenharia_ou_Tecnologia",
      modalidaty: "Presencial",
      duration: "2 meses",
      description: "Construção do back-end do projeto Skills",
    },{
      projectTitle: "Construção do Back-end",
      status: "concluido",
      occupationArea: "Engenharia_ou_Tecnologia",
      modalidaty: "Presencial",
      duration: "2 meses",
      description: "Construção do back-end do projeto Skills",
    }
  ];

  const respostaAPI = [
    { name: "liderando", itens: liderando },
    { name: "participando", itens: participando },
    { name: "concluído", itens: concluido },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
    alert("Página em construção!");
  };

  const [openCardIndices, setOpenCardIndices] = useState(
    Array(respostaAPI.length).fill(null)
  );

  const handleToggleCard = (groupIndex, cardIndex) => {
    const newOpenCardIndices = [...openCardIndices];
    newOpenCardIndices[groupIndex] =
      newOpenCardIndices[groupIndex] === cardIndex ? null : cardIndex;
    setOpenCardIndices(newOpenCardIndices);
  };

  const alertInDev = () => {
    alert("Página em construção!")
  }

  return (
    <div className="projetosComponent">
      {/* <div className="page_title">
        <p className="title">Meus projetos</p>
        <span>
          <img className="icone" src={icone} />
        </span>
      </div> */}
      <div className="page_title" style={{}}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          paddingInlineStart: 29
        }}>
          <li>
            <span style={{
              fontSize: 24,
              fontWeight: 500
            }}>
              Meus projetos
            </span>
          </li>

          <li>
            <button style={{
              backgroundColor: '#003DA5',
              borderRadius: 20,
              boxShadow: '0px 4px 4px 0px #00000040',
              width: 33,
              height: 33,
              borderStyle: "none",
            }}
            onClick={alertInDev}
            >
              <CiEdit style={{
                color: "white",
                fontSize: 19
              }} />
            </button>
          </li>
        </ul>
      </div>

      <div className="profile_card">
        {/* className='profile_card_header' = display: flex; align-itens: space-between */}

        <div className="profile_card_body" id="profileCardBody">
          <div>
            <Botao onClick={handleOpenModal} />
            {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
          </div>

          {respostaAPI.map((e, groupIndex) => (
            <div id={groupIndex} className="profile_card_body_real-oficial">
              <div className="profile_card_body_title">
                <p> {e.name} </p>
              </div>
              <div className="profile_card_body_content">
                <ul className={`test`}>
                  {e.itens.map((itens, cardIndex) => (
                    <li
                      key={cardIndex}
                      className={`card_itens ${itens.status} ${openCardIndices[groupIndex] === cardIndex
                        ? "liTaAberto"
                        : "liTaFechado"
                        }`}
                      onClick={() => handleToggleCard(groupIndex, cardIndex)}
                    >
                      <h3>{itens.projectTitle}</h3>

                      <p className="card_status">
                        {itens.status.replaceAll("_", " ")}
                      </p>
                      <div className="card_coisas_em_baixo">
                        <p>
                          <strong>Área de Atuação: </strong>{" "}
                          {itens.occupationArea}
                        </p>
                        <p>
                          <strong>Duração estimada: </strong> {itens.duration}
                        </p>
                        <p>
                          <strong>Modalidade: </strong> {itens.modalidaty}
                        </p>
                        <p>
                          <strong>Descrição: </strong> {itens.description}
                        </p>
                      </div>
                      <div className="escondida">
                        {/* <botaoConstrucao
                          onClick={handleClick}
                          className="editor"
                        >
                          <EditProjeto></EditProjeto>
                        </botaoConstrucao> */}
                        <div>
                          <h2>Cargos:</h2>
                          <div className="lideranca">
                            <div className="tituloLideranca">Liderança</div>
                            {/* <Img></Img> */}
                            <BsFillPersonFill style={{ color: '#003DA5' }} />
                          </div>
                          <div className="engenheiro">
                            <div className="tituloEngenheiro">
                              Engenheiro de Software
                            </div>
                            {/* <Img></Img> */}
                            <BsFillPersonFill style={{ color: '#003DA5' }} />
                          </div>

                          <div className="engenheirosoftware">
                            <div className="tituloCargo">
                              Engenheiro de Software
                            </div>
                            {/* <Img></Img> */}
                            <BsFillPersonFill style={{ color: '#003DA5' }} />
                          </div>
                          <div className="engenheirolaranja">
                            <div className="titulodesenvolvedorlaranja">
                              Desenvolvedor
                            </div>
                            {/* <ImgLaranja></ImgLaranja> */}
                            <BsFillPersonFill style={{ color: '#FF8200' }} />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
}
export default Projetos;
