import React, { useState } from "react";
import './style.css';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/all';

import logoImg from "../../assets/logo.svg";
import api from "../../services/API";


export default function Register() {

    // aqui fica a funcao da api_register
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [whatsapp, setwhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history=useHistory();

    async function SaveRegistro(e) {
        e.preventDefault();
        const data = { name, email, whatsapp, city, uf };
        try {
            const response = await api.post('ongs', data);
            alert(` ID de Acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
                alert('Erro no Cadastro, Tente Novamente');
        }
    }



    // aqui fica os dados do component
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
                <form onSubmit={SaveRegistro}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setname(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={e => setemail(e.target.value)} />
                    <input placeholder="WhatsApp" value={whatsapp} onChange={e => setwhatsapp(e.target.value)} />

                    <div className="input-group">

                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} />

                        <input placeholder="UF"
                            style={{ width: 80 }} value={uf}
                            onChange={e => setUf(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}