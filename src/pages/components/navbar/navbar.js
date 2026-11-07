import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from './images/logo.ico'
// import profilePicture from '../../tela-perfil/EditProfile/profilePicture.png'
import profilePicture from './images/account.png'
import { BsFillGearFill, BsBellFill, BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Notificacao from '../modules/tela-notificacao/telaNotificacao';

const HomeNavbar = () => {

    const { username } = useParams()
    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: sessionStorage.getItem('accessToken')
        }
    }

    const goToUserLoggedAccount = async () => {
        try {

            const response = await axios.get('http://localhost:3000/auth/profile', config)
            console.log(response)
            if (response.status === 200) {
                console.log("navegando...")
                navigate(`/${response.data.username}`)
                window.location.reload()
            }

        } catch (e) {
            console.log(e)
            alert("ERROR!\nVoltando para o perfil anterior...")
            navigate(`/${username}`)
        }
    }

    const goToUserEdit = async () => {
        try {
            const response = await axios.get('http://localhost:3000/auth/profile', config)
            if (response.status === 200) {
                console.log("navegando...")
                navigate(`/${response.data.username}/editProfile/accountInfos`)
                window.location.reload()
            }
        } catch (e) {
            console.log(e)
            alert("ERROR!\nVoltando para o perfil anterior...")
            navigate(`/${username}`)
        }
    }

    const [showNotification, setShowNotification] = useState(false);

    const handleShowNotification = () => {
        setShowNotification(!showNotification);
    };

    const alertInDev = () => {
        alert("Página em construção!")
    }

    const [isUserLogged, setUserLogged] = useState(false)

    const verifyIfUserIsLogged = () => {
        const accessToken = sessionStorage.getItem('accessToken')

        if (accessToken) {
            setUserLogged(true)
        } else {
            setUserLogged(false)
        }
    }

    useEffect(() => {
        verifyIfUserIsLogged()
    })

    return (
        <div className='HomeNavbar'>
            <header>
                <nav>
                    <ul>
                        <li className='logoFlex'>
                            {isUserLogged ? (
                                <Link to={"/match"}><img src={logo} alt='logo' id='logo' /></Link>
                            ) : (
                                <Link to={"/"}><img src={logo} alt='logo' id='logo' /></Link>
                            )}
                            {/* <Link to={"/"}><img src={logo} alt='logo' id='logo' /></Link> */}
                            <p>Skills</p>
                        </li>
                        <ul className='icon-buttons'>
                            <li>
                                <a style={{ textDecoration: 'underline' }} onClick={alertInDev}><BsSearch className='icons' /></a>
                            </li>
                            <li>
                                {isUserLogged ? (
                                    <BsBellFill className='icons' onClick={handleShowNotification} />
                                ) : (
                                    <a style={{ display: 'none' }} />
                                )}
                            </li>
                            <li>
                                {isUserLogged ? (
                                    <a style={{ textDecoration: 'underline' }} onClick={goToUserEdit}><BsFillGearFill className='icons' /></a>
                                ) : (
                                    <a style={{ display: 'none' }}></a>
                                )}
                            </li>
                            <li>
                                {isUserLogged ? (
                                    <img
                                        src={profilePicture}
                                        style={{ width: 30, height: 30, color: '#003da5' }}
                                        alt='profile'
                                        id='profilePicture'
                                        onClick={goToUserLoggedAccount}
                                    />
                                ) : (
                                    <img style={{ display: 'none' }}></img>
                                )}
                            </li>
                        </ul>
                    </ul>
                </nav>
            </header>
            <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 3 }}>
                {showNotification && <Notificacao />}
            </div>
        </div>
    );
}

export default HomeNavbar;