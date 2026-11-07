import { useState } from "react";

function UserStatus() {
    const [status, setStatus] = useState('Disponível');

    function changeStatus() {
        if (status === 'Disponível') {
            setStatus('Indisponível');
        } else if (status === 'Indisponível') {
            setStatus('Em Pausa');
        } else if (status === 'Em Pausa') {
            setStatus('Disponibilidade Limitada');
        }
        else if (status === 'Disponibilidade Limitada') {
            setStatus('Disponível');
        };

    }
    return (
        <div>
            <button onClick={changeStatus}>{status}</button>
        </div>
    )

}
export default UserStatus;