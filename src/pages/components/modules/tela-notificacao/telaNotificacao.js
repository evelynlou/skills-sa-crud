import './telaNotificacao.css';
import atriburCargo from './img/atribuir_cargo.svg';
import curtir from './img/curtir.svg';
import excluir from './img/excluir.svg';
import excluirCargo from './img/excluir_cargo.svg';
import match from './img/match.svg';
import seguidor from './img/person.svg';
import projeto from './img/projeto.svg';
import avatar from './img/sugar.avif';
import defaultAvatar from './img/default_avatar.png';
import { useState } from 'react';
import projectIcon from './img/Projeto.png'


function Notificacao() {
    const [click, setClick] = useState(false);
    const [textMatch, setTextMatch] = useState('Curtir de volta');
    const handleClick = () => {
        setClick(!click);
        setTextMatch(click ? 'Curtir de volta' : 'Curtido de volta')
    };
    const estiloBotao = {
        backgroundColor: click ? '#ffa647' : '',
        color: click ? '#000' : ''
    };
    const [click2, setClick2] = useState(false);
    const [textFollow, setTextFollow] = useState('Seguir de volta');
    const handleClick2 = () => {
        setClick2(!click2); setTextFollow(click2 ? 'Seguir de volta' : 'Seguido de volta')
    }
    const estiloBotao2 = {
        color: click2 ? '#000' : '',
        backgroundColor: click2 ? '#ffa647' : ''
    };
    return (
        <div className='notificacao'>
            <div className='notifi-box'>
                <div>
                    <h2>Notificações</h2>
                </div>
                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={curtir} /> <img className='avatar' src={defaultAvatar} /></p>
                    </th>
                    <th>
                        <p className='p-notify'><b>Adalberto</b> curtiu o cargo <b>"Engenheiro"</b> do seu projeto <b>"Casa"</b>.
                            <span className='text-time'> Há 20min</span>
                            <button className='follow-btn' style={estiloBotao} onClick={handleClick}><b>{textMatch}</b></button>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={match} /> <img className='avatar' src={defaultAvatar} /></p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>Marcelo Campos</b> e você se curtiram para o projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={curtir} /> <img className='project-img' src={projectIcon} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>Marcelo Campos</b> curtiu uma atividade do seu projeto <b>"Casa"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={projeto} /> <img className='project-img' src={projectIcon} /> </p>
                    </th>
                    <th>
                        <p className='p-notify'><b>Luis Santos</b> comentou em uma atividade do projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                            <button className='follow-btn' style={estiloBotao2} onClick={handleClick2}><b>{textFollow}</b></button>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={seguidor} /> <img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>Carlos Fernando</b> começou a seguir você.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={projeto} /> <img className='project-img' src={projectIcon} /> </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>Carlos Fernando</b> adicionou uma atividade ao projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={excluir} /> <img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>

                        <p className='p-notify-short'><b>Carlos Fernando</b> excluiu o projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p>
                            <img className='icon-role' src={excluirCargo} /> <img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>Carlos Fernando</b> excluiu uma atividade do projeto "Back-End".<span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={excluir} /> <img className='avatar' src={avatar} /> </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>Carlos Fernando</b> excluiu o projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>

                <div className='content-note'>
                    <th>
                        <p><img className='icon-role' src={atriburCargo} /><img className='avatar' src={avatar} />
                        </p>
                    </th>
                    <th>
                        <p className='p-notify-short'><b>Carlos Fernando</b> atribuiu você ao cargo "Front-End" do projeto <b>"Back-End"</b>.
                            <span className='text-time'> Há 20min</span>
                        </p>
                    </th>
                </div>
            </div>
        </div>);
}
export default Notificacao