import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";
import { FaUserAlt } from "react-icons/fa";

/** *
 * @param {{ projectRole: {id_role: number, user_role: string}[], closeModal: () => void}} param0
 * @returns
 */
export default function SelectToRoleComponent({
  projectRole,
  closeModal,
  idUser,
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
    const header = prepareHeaders();
    sendLiked(payLoad, header);
  };

  const preparePayload = () => {
    return {
      id_candidate: idUser,
      id_role: Number(idRole),
    };
  };

  const prepareHeaders = () => {
    return {
      Authorization: sessionStorage.getItem("accessToken"),
    };
  };

  const sendLiked = async (payload, headers) => {
    const url = `http://localhost:3000/screen-stick/create`;
    await axios.post(url, payload, { headers }).then((res) => {
      handleResponse(res);
    });
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
    <SelectToRoleComponentContainerStyled>
      <div>
        <h2>Agora selecione o cargo para o qual você o convidará!</h2>
      </div>
      <form>
        <div className="role-list">
          {projectRole &&
            projectRole.map((e) => {
              return (
                <div key={e.id_role}>
                  <label htmlFor={e.id_role}>
                    {" "}
                    <FaUserAlt /> {e.user_role}
                  </label>
                  <input
                    name="roleToInvite"
                    id={e.id_role}
                    type="radio"
                    onInput={handleIdSelect}
                  ></input>
                </div>
              );
            })}
        </div>
      </form>
      <div className="form-buttons">
        <button onClick={handleCloseModal}>Cancelar</button>
        <button disabled={!idRole ? true : false} onClick={handleLiked}>
          Concluir solicitação
        </button>
      </div>
    </SelectToRoleComponentContainerStyled>
  );
}

const SelectToRoleComponentContainerStyled = styled.div`
  background-color: #fff;
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  bottom: 200px;
  left: calc (50% - 300px);
  padding: 20px 30px;
  position: absolute;
  width: 600px;
  z-index: 1000;

  .title {
    font-weight: 700;
  }

  .role-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 360px;
    width: 60%;

    div {
      backgorund-color: #fff;
      margin-top: 15px;
      width: 180px;

      &:nth-child(4n - 1),
      &:nth-child(4n) {
        svg {
          color: #003DA5;
        }
      }

      svg {
        color: #FF8200;
      }
    }
  }

  .form-buttons {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;

    button {
      background-color: #FF8200;
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
