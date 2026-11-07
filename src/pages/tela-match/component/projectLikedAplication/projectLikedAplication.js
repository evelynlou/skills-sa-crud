import axios from "axios";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { styled } from "styled-components";

/** *
 * @param {{idCandidate: number, projectName: string, projectRole: {id_role: number, user_role: string}[], closeModal: () => void}} param0
 * @returns
 */
export default function ProjectLikedAplication({
  projectName,
  projectRole,
  closeModal,
  idCandidate,
}) {
  const [idRole, setIdRole] = useState(null);

  const handleIdSelect = (e) => {
    setIdRole(e.target.id);
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const handleLiked = () => {
    const payLoad = preparePayload();
    sendLiked(payLoad);
  };

  const preparePayload = () => {
    return {
      id_candidate: idCandidate,
      id_role: Number(idRole),
    };
  };

  const sendLiked = async (payload) => {
    const AUTH = {
      Authorization: sessionStorage.getItem("accessToken"),
    };
    const url = `http://localhost:3000/screen-stick/create`;
    try {
      await axios.post(url, payload, { headers: AUTH }).then((res) => {
        handleResponse(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleResponse = (res) => {
    if (res.status !== 201) {
      return console.log(res);
    }
    setIdRole(null);
    handleCloseModal();
    alert("Solicitação enviada com sucesso!");
    return;
  };

  return (
    <ProjectLikedAplicationComponent>
      <div>
        <h2>
          Você curtiu o projeto {projectName}. Para enviar sua solicitação,
          selecione o cargo que gostaria de preencher!
        </h2>
      </div>
      <form>
        <ul>
          {projectRole.map((e) => {
            return (
              <li key={e.id_role}>
                <label htmlFor={e.id_role}>
                  <FaUserAlt /> {e.user_role}
                </label>
                <input
                  name="projectLikedApp"
                  id={e.id_role}
                  type="radio"
                  onInput={handleIdSelect}
                ></input>
              </li>
            );
          })}
        </ul>
      </form>
      <div className="form-buttons">
        <button onClick={handleCloseModal}>Cancelar</button>
        <button disabled={!idRole ? true : false} onClick={handleLiked}>
          Concluir solicitação
        </button>
      </div>
    </ProjectLikedAplicationComponent>
  );
}

const ProjectLikedAplicationComponent = styled.div`
  background-color: #fff;
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  bottom: 200px;
  left: calc (50% - 300px);
  padding: 20px 30px;
  position: absolute;
  width: 600px;
  z-index: 999;

  form ul {
    list-style: none;
    padding: 0;

    li {
      padding: 5px 0;

      svg {
        color: #003da5;
      }

      &:nth-child(4n),
      &:nth-child(4n - 1) {
        svg {
          color: #ff8200;
        }
      }
    }
  }

  .form-buttons {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;

    button {
      background-color: #ff8200;
      border: none;
      border-radius: 10px;
      color: black;
      cursor: pointer;
      height: 25px;
      padding: 5px 10px;
      transition: 0.3s;

      &:first-child {
        background-color: #003da5;
        color: #fff;
        margin-right: 10px;
      }

      &:disabled {
        filter: brightness(0.8);
        cursor: not-allowed;
      }
    }
  }
`;
