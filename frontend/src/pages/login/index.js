import React, {useState} from "react";
import { FiLogIn } from "react-icons/all";
import { Link, useHistory } from "react-router-dom";
import './style.css';

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import api from "../../services/API";

export default function Login(){
    const [id, setid] = useState('');   
    const history=useHistory();

   async function FazerLogin(e){
        e.preventDefault();
        try {
            const response=await api.post('sessions',{ id });
            //console.log(response.data.name);
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name)
            history.push('/profile');
        } catch (err) {
            alert('Falha no Login, tente Novamente.');
        }
    }

    return(
      <div className="login-container">
          <section className="form">
                <img src={logoImg} alt="logo do project"/>

                <form onSubmit={FazerLogin}>
                    <h1>Fazer Login:</h1>

                    <input placeholder="Seu ID" value={id} onChange={e => setid(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#E02041" /> Não Tenho Cadastro </Link>                    
                </form>
          </section>

          <img src={heroesImg} alt="herois do project" />
      </div>
    );
}