import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/all";

import './style.css'
import logoImg from "../../assets/logo.svg";

export default function Profile(){
    return(
       <div className="profile-container">
           <header>
               <img src={logoImg} alt="seja um ajudador"/>
               <span> Bem Vinda, NovaDev </span>
               <Link className="button" to="/casos/new">
                   Cadastrar Novo Caso</Link>
               <button type="button">
                   <FiPower size={18} color="#e02041" ></FiPower>
               </button>
           </header>

           <h1> Casos Cadastrados</h1>

           <ul>
               <li>
                   <strong>CASO:</strong>
                   <p>Caso de Teste</p>
                   <strong>DESCRIÇÃO</strong>
                   <p>Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p> 400.000 </p>
                    <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
               </li>      

                <li>
                   <strong>CASO:</strong>
                   <p>Caso de Teste</p>
                   <strong>DESCRIÇÃO</strong>
                   <p>Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p> 400.000 </p>
                    <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
               </li>  
               <li>
                   <strong>CASO:</strong>
                   <p>Caso de Teste</p>
                   <strong>DESCRIÇÃO</strong>
                   <p>Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p> 400.000 </p>
                    <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
               </li>  
               <li>
                   <strong>CASO:</strong>
                   <p>Caso de Teste</p>
                   <strong>DESCRIÇÃO</strong>
                   <p>Descrição Teste</p>
                    <strong>VALOR:</strong>
                    <p> 400.000 </p>
                    <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
               </li>          
           </ul>
       </div>
    );
} 