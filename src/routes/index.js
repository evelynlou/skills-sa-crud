import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaCadastro from '../pages/tela-cadastro/telaCadastro.js'
import TelaMatch from '../pages/tela-match/telaMatch.js';
import TelaAboutUs from '../pages/Home/telaAboutUs.js';
import { TelaPerfil } from '../pages/tela-perfil/telaPerfil.js';
/*EditProfile => edit profile*/
import EditProfile from "../pages/tela-perfil/EditProfile/EditProfile.js"
/*EditarPerfil => edit profile account infos(username,email), (evelyn)*/
import EditarPerfil from '../pages/tela-perfil/EditProfile/Edit-account/EditarPerfil.js';

function WebRoutes() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<TelaAboutUs />} />
                        <Route path="/match" element={<TelaMatch />} />
                        <Route path="/cadastro" element={<TelaCadastro />} />
                        <Route path="/:username" element={<TelaPerfil />} />
                        <Route path='/:username/editProfile' element={<EditProfile />} />
                        <Route path='/:username/editProfile/accountInfos' element={<EditarPerfil />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export { WebRoutes };