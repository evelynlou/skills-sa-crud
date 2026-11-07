/*import geral*/
import iconPerfil from './img/account.png';
import userIcon from './img/userIcon.png'
import Header from '../components/navbar/navbar'
import "./telaPerfil.css";

/*react*/
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

/*react-icons*/
import { FaCakeCandles, FaMapLocationDot, FaCircleUser } from 'react-icons/fa6';
import { BiSolidBriefcase, BiLoaderCircle } from 'react-icons/bi'
import { AiOutlineExport } from 'react-icons/ai'

/*components from telaPerfil*/
import Experiencias from './nicoly/Experiencias/Experiencias';
import Certificados from './nicoly/Certificados/Certificados';
import Projetos from './isa_e_vih/Projects/projetos';
import axios from 'axios';
import Formacao from './lele/Formacao/formacao';
import Skills from './lele/skills/userSkills';

function TelaPerfil() {

    window.scrollTo(0, 0)

    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const { username } = useParams()

    const config = {
        headers: {
            Authorization: sessionStorage.getItem('accessToken')
        }
    }

    const handleRequisition = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/user/findOne/${username}`, config)
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
            navigate('/')
        }
    }

    useEffect(() => {
        handleRequisition()
    }, [])

    /*==========================================*/

    //Tratamento dos dados do back-end para exibit bonitin no front

    const stateName = (state) => {
        switch (state) {
            case 'AC':
                return 'Acre';
            case 'AL':
                return 'Alagoas';
            case 'AP':
                return 'Amapá';
            case 'AM':
                return 'Amazonas';
            case 'BA':
                return 'Bahia';
            case 'CE':
                return 'Ceará';
            case 'DF':
                return 'Distrito Federal';
            case 'ES':
                return 'Espírito Santo';
            case 'GO':
                return 'Goiás';
            case 'MA':
                return 'Maranhão';
            case 'MT':
                return 'Mato Grosso';
            case 'MS':
                return 'Mato Grosso do Sul';
            case 'MG':
                return 'Minas Gerais';
            case 'PA':
                return 'Pará';
            case 'PB':
                return 'Paraíba';
            case 'PR':
                return 'Paraná';
            case 'PE':
                return 'Pernambuco';
            case 'PI':
                return 'Piauí';
            case 'RJ':
                return 'Rio de Janeiro';
            case 'RN':
                return 'Rio Grande do Norte';
            case 'RS':
                return 'Rio Grande do Sul';
            case 'RO':
                return 'Rondônia';
            case 'RR':
                return 'Roraima';
            case 'SC':
                return 'Santa Catarina';
            case 'SP':
                return 'São Paulo';
            case 'SE':
                return 'Sergipe';
            case 'TO':
                return 'Tocantins';
            default:
                return 'Estado Desconhecido';
        }
    }

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

    const handleBirthDate = (isoBirthDate) => {
        const date = new Date(isoBirthDate);
        const day = date.getDate();
        const month = convertMonths(date.getMonth() + 1);

        return `${day + 1} de ${month}`;
    };

    // const studyAreaName = (studyArea) => {
    //     if (studyArea === undefined) {
    //         return studyArea
    //     }
    //     const parte1 = studyArea[0].split("_")
    //     const final = parte1.join(" ")
    //     return final
    // }

    return (
        <div>
            <div className='TelaPerfil'>

                <Header />

                <div className='div-perfil-retanguloAzul'>

                    <div className='container-perfil-retanguloBranco'>

                        <div className='container-perfil-infos'>

                            <div className='div-infosLeft'>
                                <div>
                                    {user.profilePictureUrl ? (
                                        <img src={user.profilePictureUrl} className='iconPerfil' alt='icon' />
                                    ) : (
                                        <img src={userIcon} className='iconPerfil' alt='icon' />
                                    )
                                    }
                                    <div className='infoHeader'>
                                        <a href=''><AiOutlineExport /> Contate-me</a>
                                    </div>
                                </div>
                                <div style={{ display: 'block', marginLeft: '10%' }}>
                                    <div className='infoHeader'>
                                        <h1>{user.name}</h1> {/* name => firstName + lastName (junção feita no backend) */}
                                        <span>@{user.username}</span>
                                    </div>

                                    <div className='accountInfos'>
                                        <div className='div-forInfos'>
                                            <span className='infoFollowing'>236</span>
                                            <span className='spanFollowing'>Seguindo</span>
                                        </div>
                                        <hr className='lineDivisor' />
                                        <div className='div-forInfos'>
                                            <span className='infoFollowers'>433</span>
                                            <span className='spanFollowers'>Seguidores</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='div-infosRight'>
                                <ul>
                                    <li style={{ width: 265 }}>
                                        <div className='groupIcons'><div className='div-orangeIcon'><BiSolidBriefcase className='icon' /></div>
                                            {user.studyArea == "Indefinido" || user.studyArea == "" ?
                                                (
                                                    <span className='spanIcon'>Área de Estudo</span>
                                                ) :
                                                (
                                                    <span className='spanIcon'>{user.studyArea}</span>
                                                )
                                            }
                                        </div>
                                    </li>
                                    <li style={{ marginLeft: 15 }}>
                                        <div className='groupIcons'><div className='div-blueIcon'><FaCakeCandles className='icon' /></div><span className='spanIcon'>{handleBirthDate(user.birthDate)}</span></div>
                                    </li>
                                </ul>
                                <ul>
                                    <li style={{ width: 265 }}>
                                        <div className='groupIcons'><div className='div-blueIcon'><BiLoaderCircle className='icon' /></div><span className='spanIcon'>{user.status}</span></div>
                                    </li>
                                    <li style={{ marginLeft: 15 }}>
                                        <div className='groupIcons'><div className='div-orangeIcon'><FaMapLocationDot className='icon' /></div><span className='spanIcon'>{stateName(user.state)}</span></div>
                                    </li>
                                </ul>
                            </div>

                            {user?.isMe &&
                                <div className='div-button'>
                                    <Link to={`/${user.username}/editProfile`}><button className='btt-editProfile'>Editar Perfil</button></Link>
                                </div>
                            }

                        </div>

                    </div>

                    <div className='container-perfil-aboutMe-retanguloLaranja'>
                        <div className='container-perfil-aboutMe-infos'>
                            <h2>Sobre mim</h2>

                            {user.description === null || user.description == "descriptionEmpty" ? (
                                <p>Olá pessoal! Me chamo {user.name}, natural de {stateName(user.state)} e esse é meu perfil na SKILLS!</p>
                            ) : (
                                <p>{user.description}</p>
                            )
                            }

                        </div>
                    </div>

                </div>

                <footer style={{
                    display: 'block',
                    marginTop: '24%',
                    width: '100%'
                }}
                    className='perfil-footer'
                >
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        listStyle: 'none'
                    }}>
                        <li><a href='#skills' style={{ textDecoration: 'none', color: 'black' }}>Skills</a></li>
                        <li><a href='#formacoes' style={{ textDecoration: 'none', color: 'black' }}>Formações</a></li>
                        <li><a href='#experiencias' style={{ textDecoration: 'none', color: 'black' }}>Experiências</a></li>
                        <li><a href='#certificados' style={{ textDecoration: 'none', color: 'black' }}>Certificados</a></li>
                        <li><a href='#projetos' style={{ textDecoration: 'none', color: 'black' }}>Projetos</a></li>
                    </ul>
                    <hr style={{ boxShadow: '0px 4px 4px 0px #00000040' }} />
                </footer>

            </div> {/*fim da primeira parte da telaPerfil*/}

            <div style={{
                marginTop: '3%',
                marginLeft: '5.6%',
                width: '90%'
            }}
                id='skills'
            >
                <Skills />
            </div>

            <div style={{
                marginTop: '3%',
                marginLeft: '6%',
                width: '90%'
            }}
                id='formacoes'
            >
                <Formacao />
            </div>

            <div style={{
                marginTop: '3%',
                marginLeft: '6%',
                width: '90%'
            }}
                id='experiencias'
            >
                <Experiencias />
            </div>

            <div style={{
                marginTop: '5%',
                marginLeft: '6%',
                width: '90%'
            }}
                id='certificados'
            >
                <Certificados />
            </div>

            <div style={{
                marginTop: '3%',
                marginLeft: '6%',
                width: '90%'
            }}
                id='projetos'
            >
                <Projetos />
            </div>

        </div>
    );
}
// {/* <PerfilTay></PerfilTay> */ }
export { TelaPerfil }