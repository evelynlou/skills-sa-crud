//import './App.css';
import Skill from './Components/skill';
import Habilidade from './Components/habilidade';
import { Multiselect } from './Components/multiselect';

function PerfilLele() {
    return (
        <div className="perfilLele">
            <header className="perfilLele-header">
            </header>
            <Multiselect />
            <Habilidade>
                <Skill />
            </Habilidade>
        </div>
    );
}

export default PerfilLele;