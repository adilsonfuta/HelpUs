import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/all';

import logoImg from "../../assets/logo.svg";


export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="seja um ajudador" />
                    <h1>Cadastro</h1>
                    <p> Faça o Cadastro, entre na plataforma e ajude a comunidade a crescer.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" /> 
                        Ja Tenho Registro 
                    </Link>
                </section>
                <form>
                    <input  placeholder="Nome da ONG" />
                    <input type="email" placeholder="Email" />
                    <input  placeholder="WhatsApp" />

                    <div className="input-group">
                    <input  placeholder="Cidade" />
                    <input  placeholder="UF"  style={{width:80}} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}