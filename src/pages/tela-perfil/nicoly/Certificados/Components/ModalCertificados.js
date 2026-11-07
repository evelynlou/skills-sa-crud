import React from "react";
import "./ModalCertificados.css";
// import "../../Experiencias/Components/ModalExp.css"

const Modal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? "modal-open-certificados" : "modal-certificados";

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        {/* <span className="close" onClick={onClose}>&times;</span> */}
        <h2 className="titulo">Adicionar Certificado</h2>
        <p className="p">Nome da certificação</p>
        <input></input>

        <span className="instituicaoEnsino">
          <p className="p">Instituição de ensino</p>
          <select className="instituicao">
            <option value="" disabled selected hidden>
              Selecione aqui
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </span>

        <div className="lados">
          <span className="dataInicio">
            <p className="p">Data de início</p>
            <input type="date" className="dataConclusao" />
          </span>

          <span className="Dataconclusao">
            <p className="p">Data de conclusão</p>
            <input type="date" className="dataConclusao" />
          </span>
        </div>

        <p className="p">URL do certificado</p>
        <input></input>

        <button className="azul" onClick={onClose}>Cancelar</button>
        <button className="laranja">Salvar</button>
      </div>
    </div >
  );
};

export default Modal;
