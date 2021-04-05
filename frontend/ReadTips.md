# Modelo 
import React from "react";

export default function Header(props) {
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    )
}

# Implementacao
import React, {useState} from "react";
import Header from "./Header";


function App() {
  
  // estado e imutabilidade e propriedades

  let [contador,setContador] = useState(0);
  function adicionar() {
    setContador(contador+1);
    console.log(contador)
  }
  return (
    <div>
      <Header >Contador: {contador} </Header>
      <button onClick={adicionar}>Iniciar</button>
    </div>

  );
}

export default App;



