import './userskill.css'
import { AiOutlinePlus } from 'react-icons/ai'

const Skills = () => {

    const alertInDev = () => {
        alert("Página em construção!")
    }

    return (
        <div className="userSkills">
            <span style={{ fontSize: 24, fontWeight: 500 }}>Skills</span>
            <div style={{ marginTop: 20, display: 'flex' }}>
                <div className='hardSkills' style={{
                    width: '45%',
                    borderRadius: 10,
                    border: '0.2px solid black',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    height: 500,
                    width: 580
                }}>
                    <header>
                        <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
                            <li><span style={{ fontSize: 20, fontWeight: 500 }}>Hard skills</span></li>
                            <li><AiOutlinePlus style={{ marginRight: 10, fontSize: 20 }} onClick={alertInDev} /></li>
                        </ul>
                    </header>
                    <div style={{ width: '100%', height: 400 }}>
                        <ul className='hardSkills-ul' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            marginInlineEnd: 60,
                            maxWidth: '80%'
                        }}>
                            <li style={{ width: 60 }}><span>SEO</span></li>
                            <li style={{ width: 110 }}><span>Data Analysis</span></li>
                            <li style={{ width: 110 }}><span>Copywriting</span></li>
                            <li style={{ width: 170 }}><span>Marketing de Conteúdo</span></li>
                            <li style={{ width: 80 }}><span>React.js</span></li>
                            <li style={{ width: 180 }}><span>Análise comportamental</span></li>
                        </ul>
                    </div>
                </div>

                <div className='softSkills' style={{
                    width: '45%',
                    borderRadius: 10,
                    border: '0.2px solid black',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    height: 500,
                    width: 580,
                    marginLeft: 60
                }}>
                    <header>
                        <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
                            <li><span style={{ fontSize: 20, fontWeight: 500 }}>Soft skills</span></li>
                            <li><AiOutlinePlus style={{ marginRight: 10, fontSize: 20 }} onClick={alertInDev} /></li>
                        </ul>
                    </header>
                    <div style={{ width: '100%', height: 400 }}>
                        <ul className='softSkills-ul' style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            marginInlineEnd: 60,
                            maxWidth: '80%'
                        }}>
                            <li style={{ width: 80 }}><span>Empatia</span></li>
                            <li style={{ width: 60 }}><span>Ética</span></li>
                            <li style={{ width: 88 }}><span>Liderança</span></li>
                            <li style={{ width: 170 }}><span>Resolução de conflitos</span></li>
                            <li style={{ width: 105 }}><span>Flexibilidade</span></li>
                            <li style={{ width: 140 }}><span>Gestão de equipes</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;