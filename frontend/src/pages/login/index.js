import React from "react";
import { FiLogIn } from "react-icons/all";
import { Link } from "react-router-dom";
import './style.css';

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Login(){
    return(
      <div className="login-container">
          <section className="form">
                <img src={logoImg} alt="logo do project"/>

                <form >
                    <h1>Fazer Login:</h1>

                    <input placeholder="Seu ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#E02041" /> Não Tenho Cadastro </Link>                    
                </form>
          </section>

          <img src={heroesImg} alt="herois do project" />
      </div>
    );
}