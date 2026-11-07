import { useEffect, useState } from "react";
import axios from "axios";

export default function NameUser() {
    const [name, setName] = useState('User');
    const [newName, setNewName] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://viacep.com.br/ws/88107483/json/');
            setName(response.data.bairro);
        } catch (error) {
            console.error('Erro ao buscar nome de usuário:', error);
        }
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(newName);
        setNewName('');
    };

    return (
        <div>
            <h2>{name}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Novo Nome"
                    value={newName}
                    onChange={handleNameChange}
                />
                <button type="submit">Alterar Nome</button>
            </form>
        </div>
    );
}
