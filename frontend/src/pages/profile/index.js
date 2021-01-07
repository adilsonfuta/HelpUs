import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/all";

import './style.css';
import logoImg from "../../assets/logo.svg";
import api from "../../services/API";

export default function Profile() {

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [casos, setcasos] = useState([]);
    const history=useHistory();

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

   async function EliminarCasos(id) {
        try {
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }
            });
            setcasos(casos.filter(caso => caso.id!==id));
        } catch (error) {
                alert('erro ao Deletar caso');
        }
    }

    function FazerLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="seja um ajudador" />
                <span> Bem Vinda, {ongName} </span>
                <Link className="button" to="/casos/new">
                    Cadastrar Novo Caso</Link>
                <button type="button" onClick={FazerLogout}>
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
                        <p> { Intl.NumberFormat('pt',{style:'currency', currency:'aoa'}).format(caso.value)} </p>
                        <button type="button" onClick={()=>EliminarCasos(caso.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>

                ))}

            </ul>
        </div>
    );
} 