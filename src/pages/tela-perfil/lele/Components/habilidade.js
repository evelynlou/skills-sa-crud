import Skill from "./skill"
import Botao from "./botao"

function Habilidade() {
    let habil = [{ id: 1, name: "habilidade1" }, { id: 2, name: "habilidade2" }, { id: 3, name: "habilidade3" }]

    return (
        <div>
            <h1>HABILIDADES</h1>
            <img src="" id="add"></img>
            <h2> Skills</h2>
            <button onclick="AddHabil"><img src=""></img></button>
            <div class="sk">
                {habil.map(({ id, name }) => (

                    <p id={id} onClick={e => funcaoPSelecionar(id)}> {name} </p>

                ))}
            </div>
            <h1>FORMAÇÃO</h1>
            <Botao id="add"><img src=""></img></Botao>


        </div>
    )
}

function funcaoPSelecionar(id) {
    console.log("id selecionado: " + id)

}

export default Habilidade
