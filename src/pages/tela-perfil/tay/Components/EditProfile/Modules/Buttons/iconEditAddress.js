import { useState, useEffect } from "react"
import axios from "axios";

export default function EditAddress() {
    const [address, setAddress] = useState(' ')
    const [newAddress, setNewAddress] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://viacep.com.br/ws/88107483/json/');
            setAddress(response.data.bairro);
        } catch (error) {
            console.error('Erro ao buscar o endereço do usuário:', error);
        }
    };

    const handleAddressChange = (event) => {
        setNewAddress(event.target.value);
    };

    const handle = (event) => {
        event.preventDefault();
        setAddress(newAddress);
        setNewAddress('');
    };

    return (
        <div>
            <p>{address}</p>
            <form onSubmit={handle}>
                <input
                    type="text"
                    placeholder="Novo Endereço"
                    value={newAddress}
                    onChange={handleAddressChange}
                />
                <button type="submit">Alterar Endereço</button>
            </form>
        </div>
    );
}