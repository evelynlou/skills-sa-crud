import { useEffect, useState } from "react";
import axios from "axios";

export default function Followers() {
    const [numFollowers, setNumFollowers] = useState(0);
    const [numFollowing, setNumFollowing] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    //teste consulta API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://viacep.com.br/ws/88107483/json/');
            setNumFollowers(response.data.siafi);
            setNumFollowing(response.data.ibge);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    return (
        <div>
            <p>{numFollowers} <br /> Seguidores</p>
            <p>{numFollowing} <br /> Seguindo</p>
        </div>
    )

}