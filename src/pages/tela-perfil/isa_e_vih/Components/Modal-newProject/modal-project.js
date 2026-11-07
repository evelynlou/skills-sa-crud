import React from "react";
import "./modal-project.css";

// import Img from "../profile/img";
// import ImgLaranja from "../profile/imgLaranja";
import { BsFillPersonFill } from 'react-icons/bs'

const Modal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? "modal-open-project" : "modal-project";
  const handleClick = () => {
    alert("Página em construção!");
  };

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        {/* <span className="close" onClick={onClose}>&times;</span> */}
        <h2 className="titulo">Adicionar Projeto</h2>
        <p className="p">Nome</p>
        <input></input>
        <p className="p">Área de Atuação</p>
        <input></input>
        <p className="p">Duração Estimada</p>
        <input></input>

        <div className="lados">
          <span className="statusDeAndamento">
            <p className="p">Status de Andamento</p>
            <select className="status_modalidade">
              <option value="" disabled selected hidden>
                Selecione uma opção
              </option>
              <option>Sketch</option>
              <option>Indisponível para participar</option>
              <option>Disponível para participar</option>
              <option>Concluido</option>
            </select>
          </span>

          <span className="modalidade">
            <p className="p">Modalidade</p>
            <select className="status_modalidade">
              <option value="" disabled selected hidden>
                Selecione uma opção
              </option>
              <option>Presencial</option>
              <option>Hibrido</option>
              <option>Remoto</option>
            </select>
          </span>
        </div>
        <p className="p">Descrição</p>
        <input className="descricao"></input>
        <p className="p">Cargos</p>
        <input className="juntar"></input>

        {/* <div className="CargosModal">
          <div className="lider">
            <div className="tituloLider">Liderança</div>
            <BsFillPersonFill style={{ color: '#003DA5' }} />
          </div>
          <div className="engSoft">
            <div className="tituloEngSoft">Engenheiro de Software</div>
            <BsFillPersonFill style={{ color: '#003DA5' }} />
          </div>

          <div className="engenheirosoft">
            <div className="tituloEngenheiroSoft">Engenheiro de Software</div>
            <BsFillPersonFill style={{ color: '#003DA5' }} />
          </div>

          <div className="engenheirosof">
            <div className="tituloEngenheirosof">Engenheiro de Software</div>
            <BsFillPersonFill style={{ color: '#003DA5' }} />
          </div>

          <div className="engenheirosoftwa">
            <div className="tituloCargoSoftwa">Engenheiro de Software</div>
            <BsFillPersonFill style={{ color: '#003DA5' }} />
          </div>

          <div className="desenvolvedorLaranja">
            <div className="tituloDesenvolvedorLaranja">Desenvolvedor</div>
            <BsFillPersonFill style={{ color: '#FF8200' }} />
          </div>
        </div> */}

        <div style={{ display: 'block' }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            fontSize: 12,
            paddingInlineStart: 0,
            justifyContent: 'space-between'
          }}>
            <li><BsFillPersonFill style={{ color: '#003DA5' }} /> Liderança</li>
            <li style={{ marginLeft: 30 }}><BsFillPersonFill style={{ color: '#003DA5' }} /> Engenheiro de Software</li>
            <li><BsFillPersonFill style={{ color: '#003DA5' }} /> Engenheiro de Software</li>
          </ul>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            fontSize: 12,
            paddingInlineStart: 0,
            justifyContent: 'space-between'
          }}>
            <li><BsFillPersonFill style={{ color: '#FF8200' }} /> Desenvolvedor</li>
            <li><BsFillPersonFill style={{ color: '#003DA5' }} /> Engenheiro de Software</li>
            <li><BsFillPersonFill style={{ color: '#003DA5' }} /> Engenheiro de Software</li>
          </ul>
        </div>

        <button className="lateral" onClick={handleClick}>
          Adicionar{" "}
        </button>

        <div style={{
          position: 'relative',
          left: '50%'
        }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: 90
          }}>
            <li><button className="azul" onClick={onClose}>Cancelar</button></li>
            <li><button className="laranja" onClick={handleClick}>Salvar</button></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Modal;
