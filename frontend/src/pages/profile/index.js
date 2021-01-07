import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/all";

import './style.css';
import logoImg from "../../assets/logo.svg";
import api from "../../services/API";

export default function Profile() {

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [casos, setcasos] = useState([]);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(
            response => {
                setcasos(response.data)
            }
        )
    }, [ongId]);
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="seja um ajudador" />
                <span> Bem Vinda, {ongName} </span>
                <Link className="button" to="/casos/new">
                    Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" ></FiPower>
                </button>
            </header>

            <h1> Casos Cadastrados</h1>

            <ul>
                {casos.map(caso =>
                (
                    <li key={caso.id}>
                        <strong>CASO:</strong>
                        <p>{caso.title}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{caso.descriptions}</p>
                        <strong>VALOR:</strong>
                        <p> { Intl.NumberFormat('pt',{style:'currency', currency:'AOA'}).format(caso.value)} </p>
                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>

                ))}

            </ul>
        </div>
    );
} 