import React, {useState} from "react";
import './style.css';
import { Link, useHistory} from "react-router-dom";
import { FiArrowLeft } from 'react-icons/all';

import logoImg from "../../assets/logo.svg";
import api from "../../services/API";

export default function NewIncident(){
    const [tittle, settitle] =useState('');
    const [descriptions, setdescriptions] =useState('');
    const [value, setvalue] =useState('');
    const ongId = localStorage.getItem('ongId');
    const history=useHistory();

    async function SaveCaso() {
        e.preventDefault();
       
        const data={title, descriptions, value, };
        try {
             await api.post('incidents', data, {
                headers:{
                    Authorization: ongId,
            }} 
            )
            
            history.push('/profile');
        } catch (error) {
            alert('Erro ao Cadastrar Caso, Tente Novamente')
        }
    }

    return(

        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="seja um ajudador" />
                <h1>Cadastrar Novo Caso</h1>
                <p> Descreva o caso detalhadamente para encontrar um heroi para ajuda-lo.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" /> 
                    Voltar para Home
                </Link>
            </section>
            <form onSubmit={SaveCaso}>
                <input  placeholder="Titulo do Caso"
                value={tittle} onChange={e=> settitle(e.target.value)}
                />
                <textarea type="email" placeholder="Descrição do Caso" 
                 value={descriptions
                } onChange={e=> setdescriptions(e.target.value)}
                />
                <input  placeholder="Valor em Reais"
                value={value} onChange={e=> setvalue(e.target.value)}
                />
               
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>

    );
}