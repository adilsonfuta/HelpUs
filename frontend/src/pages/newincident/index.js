import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/all';

import logoImg from "../../assets/logo.svg";

export default function NewIncident(){
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
            <form>
                <input  placeholder="Titulo do Caso" />
                <textarea type="email" placeholder="Descrição do Caso" />
                <input  placeholder="Valor em Reais" />
               
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>

    );
}