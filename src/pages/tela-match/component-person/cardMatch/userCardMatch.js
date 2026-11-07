import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillHeart, AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { MdWorkOutline } from "react-icons/md";
import { RiCake2Line } from "react-icons/ri";
import styled from "styled-components";
import ModalInviteToProject from "./modalInviteToProjectComponent";
import StyledAllDone from "../../component/cardMatch/styledAllDone";
import TitleCardMatch from "../../component/title/titleCardMatch";

const convertStates = (val) => {
  let data;

  switch (val.toUpperCase()) {
    case "AC":
      data = "Acre";
      break;
    case "AL":
      data = "Alagoas";
      break;
    case "AM":
      data = "Amazonas";
      break;
    case "AP":
      data = "Amapa";
      break;
    case "BA":
      data = "Bahia";
      break;
    case "CE":
      data = "Ceara";
      break;
    case "DF":
      data = "Distrito Federal";
      break;
    case "ES":
      data = "Espirito Santo";
      break;
    case "GO":
      data = "Goias";
      break;
    case "MA":
      data = "Maranhao";
      break;
    case "MG":
      data = "Minas Gerais";
      break;
    case "MS":
      data = "Mato Grosso do Sul";
      break;
    case "MT":
      data = "Mato Grosso";
      break;
    case "PA":
      data = "Para";
      break;
    case "PB":
      data = "Paraiba";
      break;
    case "PE":
      data = "Pernambuco";
      break;
    case "PI":
      data = "Piaui";
      break;
    case "PR":
      data = "Parana";
      break;
    case "RJ":
      data = "Rio de Janeiro";
      break;
    case "RN":
      data = "Rio Grande do Norte";
      break;
    case "RO":
      data = "Rondonia";
      break;
    case "RR":
      data = "Roraima";
      break;
    case "RS":
      data = "Rio Grande do Sul";
      break;
    case "SC":
      data = "Santa Catarina";
      break;
    case "SE":
      data = "Sergipe";
      break;
    case "SP":
      data = "São Paulo";
      break;
    default:
      data = "Tocantins";
      break;
  }

  return data;
};

const convertMonths = (val) => {
  switch (val) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    default:
      return "Dezembro";
  }
};

/**
 *
 * @param {{filterObject: [{}]}} param0
 * @returns
 */
export default function UserCardMatch({ filterObject }) {
  const [data, setData] = useState([]);
  const [currentUserToDisplay, setCurrentUserToDisplay] = useState(0);
  const [openSelectProjectModal, setOpenSelectProjectModal] = useState(false);

  useEffect(() => {
    setData([]);
    getDataAPI(filterObject);
  }, [filterObject]);

  const getDataAPI = async () => {
    const url = "http://localhost:3000/user/findInterested";
    const filterInString = JSON.stringify(filterObject);
    const options = {
      "Authorization": `${sessionStorage.getItem("accessToken")}`,
      "Filters": filterInString,
    }
    axios.get(url, { headers: options }).then((res) => {
      handleResponse(res);
    });
  };

  const handleResponse = (res) => {
    if (res.status !== 200) {
      return console.log("Deu erro");
    }
    setData(res.data);
    return;
  };

  const handleOpenSelectProjectModal = () => {
    setOpenSelectProjectModal(!openSelectProjectModal);
  };

  const handleNextUser = () => {
    setCurrentUserToDisplay(currentUserToDisplay + 1);
  };

  const handleBirthDate = (isoBirthDate) => {
    const date = new Date(isoBirthDate);
    const day = date.getDate();
    const month = convertMonths(date.getMonth() + 1);

    return `${day} de ${month}`;
  };

  return (
    <>
      {data[currentUserToDisplay] ? (
        <div>
          <TitleCardMatch
              title="Buscando novos participantes"
              subTitle="Para os seus"
              subTitleEnphasisWord="projetos!"
          />
          <StyledUserCard>
            <div className="left-side">
              <div className="img-container">
                <img src={data?.[currentUserToDisplay].profilePictureUrl ?? 'https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg'} alt="user-profile-image" />
              </div>
            </div>
            <div className="rigth-side">
              <div className="card-title">
                <div className="user-status">
                  <div className="user_name">
                    <h3>
                      {data[currentUserToDisplay] &&
                        data[currentUserToDisplay].name}
                    </h3>
                    <p>
                      @
                      {data[currentUserToDisplay] &&
                        data[currentUserToDisplay].username}
                    </p>
                  </div>
                  <div className="follow-status">
                    <div>
                      <p style={{ color: "#FF8200", fontWeight: 700 }}>
                        {data[currentUserToDisplay] &&
                          data[currentUserToDisplay].followers.length}
                      </p>
                      <p>seguidores</p>
                    </div>
                    <div>
                      <p style={{ color: "#003DA5", fontWeight: 700 }}>
                        {data[currentUserToDisplay] &&
                          data[currentUserToDisplay].following.length}
                      </p>
                      <p>seguindo</p>
                    </div>
                  </div>
                </div>
                <div className="hXj1oQp">
                  <p>
                    <AiFillInfoCircle />
                    <span>Ver mais!</span>
                  </p>
                </div>
              </div>
              <div className="card-description">
                <div>
                  <p>
                    {data[currentUserToDisplay] &&
                      data[currentUserToDisplay].description}
                  </p>
                </div>
              </div>
              <div className="card-tags">
                <div className="tags-item user-state">
                  <span className="item-icon">
                    <LiaMapMarkedAltSolid />
                  </span>
                  <p className="item-text">
                    {data[currentUserToDisplay] &&
                      convertStates(data[currentUserToDisplay].state)}
                  </p>
                </div>
                <div className="tags-item user-state">
                  <span className="item-icon">
                    <BiLoaderCircle />
                  </span>
                  <p className="item-text">
                    {data?.[currentUserToDisplay]?.status || ""}
                  </p>
                </div>
                <div className="tags-item user-studyArea">
                  <span className="item-icon">
                    <MdWorkOutline />
                  </span>
                  <p className="item-text">
                    {data?.[currentUserToDisplay]?.studyArea?.[0] ||
                      "Não informado"}
                  </p>
                </div>
                <div className="tags-item user-birth-date">
                  <span className="item-icon">
                    <RiCake2Line />
                  </span>
                  <p className="item-text">
                    {data[currentUserToDisplay] &&
                      handleBirthDate(data[currentUserToDisplay].birthDate)}
                  </p>
                </div>
              </div>
            </div>
          </StyledUserCard>
          <div className="card-applications">
            <div className="btn-card-applications">
              <button onClick={handleOpenSelectProjectModal}>
                <AiFillHeart />
              </button>
            </div>
            <div className="btn-card-applications">
              <button onClick={handleNextUser}>
                <AiOutlineClose/>
              </button>
            </div>
            {openSelectProjectModal && (
              <ModalInviteToProject
                nameUser={data?.[currentUserToDisplay]?.name || ""}
                closeModal={handleOpenSelectProjectModal}
                idUser={data?.[currentUserToDisplay]?.id_user || null}
              />
            )}
          </div>
        </div>
      ) : (
        <StyledAllDone />
      )}
    </>
  );
}

const StyledUserCard = styled.div`
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  display: flex;
  padding: 25px 50px;

  .left-side {
    align-items: center;
    display: flex;
    min-width: 150px;
    width: 25%;
    height: 300px;

    .img-container {
      height: 220px;
      width: 220px;

      img {
        border-radius: 50%;
        height: 100%;
        width: 100%;
      }
    }
  }

  .rigth-side {
    height: 300px;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 75%;

    .card-title {
      align-itens: center;
      display: flex;
      justify-content: space-between;

      .user-status {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        width: 95%;

        .user_name h3 {
          font-size: 25px;
        }

        .follow-status {
          align-items: center;
          display: flex;
          justify-content: space-between;
          text-align: center;
          width: 45%;

          div p {
            margin: 5px 0;

            &:first-child {
              font-size: 25px;
            }
          }
        }
      }

      .hXj1oQp {
        color: #ff8200;
        text-decoration: underline;

        p {
          align-items: center;
          display: flex;

          svg {
            font-size: 20px;
          }

          span {
            font-weight: bold;
            margin-left: 10px;
          }
        }
      }
    }
  }

  .card-title {
    align-itens: center;
    display: flex;
    justify-content: space-between;

    h2 {
      margin-bottom: 0;
    }

    p {
      margin-top: 5px;
    }
  }

  & + .card-applications {
    div.btn-card-applications {
      margin: 0 10px;

      button {
        background-color: #ffa647;
        border: none;
        border-radius: 100%;
        color: #003da5;
        cursor: pointer;
        height: 70px;
        transition: 0.3s;
        width: 70px;

        &:hover {
          background-color: #ff8200;
        }

        svg {
          font-size: 30px;
        }
      }
    }
  }

  .card-tags {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    width: 100%;

    .tags-item {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;

      .item-icon {
        align-items: center;
        background-color: #003da5;
        border: 1px solid white;
        border-radius: 100%;
        box-shadow: 0 5px 9px -5px black;
        color: white;
        display: flex;
        font-size: 25px;
        height: 40px;
        justify-content: center;
        width: 40px;
      }

      &:nth-child(2n - 1) .item-icon {
        background-color: #ff8200;
      }

      .item-text {
        margin-left: 10px;
        font-weight: bold;
      }
    }
  }
`;
