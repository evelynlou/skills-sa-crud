const Filtro = () => {
    return (
        <div className="filtro">
            <label>
                <input type="checkbox" id="area_de_atuacao" name="opciones" value="opcion1" />
                Área de atuação
            </label> <br></br>
            <label>
                <input type="checkbox" id="status" name="opciones" value="opcion1" />
                Status
            </label> <br></br>
            <label>
                <input type="checkbox" id="nivel_de_formacao" name="opciones" value="opcion1" />
                Nível de formação
            </label><br></br>
        </div>
    )
}
export default Filtro 