import axios from "axios";
import React, { useEffect, useState } from "react"
import { FaUserAlt } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";
import "./Toogle.btn.css"

export default function ToogleBtn({ toFilter }) {

    const [myData, setMyData] = useState([]);
    const [isToggled, toggle] = useState(true)

    useEffect(() => {
        getMyDataAPI();
    }, [])

    const getMyDataAPI = async () => {
        const url = 'http://localhost:3000/auth/profile';
        const AUTH = {
            "Authorization": `${sessionStorage.getItem("accessToken")}`,
        }
        axios.get(url, { headers: AUTH }).then((res) => {
            if (res.status !== 200) {
                return console.log("Deu erro");
            }
            setMyData(res.data);
        });
    }

    const callback = async () => {
        if (await iHaveProject() === true) {
            toggle(!isToggled);
            toFilter(!isToggled);
            return
        } else {
            alert("Você não possui projetos para convidar alguém!")
            toggle(isToggled)
            toFilter(isToggled)
        }
    }
 
    const iHaveProject = async () => {
        const boolean = myData?.project?.[0] ? true : false;
        return boolean;
    }

    return (
        <label className="toogle-container">
            <input type="checkbox" defaultChecked={isToggled} className={`input-${isToggled}`} onClick={callback} />
            <span> { isToggled ? <RiPresentationFill /> : <FaUserAlt /> } </span>
        </label>
    )
}