import "./App.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import Botao from "./components/Buttons";
import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);

  return (
    <div className="App">
      <Titulo texto="Produtos" s />

      <Subtitulo texto="Teste de Subtitulo" />
      <Titulo texto={`Quantidade de produtos no carrinho ${numero}`} />
      <Botao
        funcao={() => {
          numero > 0 && setNumero(numero - 1);
        }}
        color="error"
        texto="Subtrair Quantidade"
      ></Botao>
      <Botao
        funcao={() => {
          setNumero(numero + 1);
        }}
        color="success"
        texto="Adicioanar Quantidade"
      ></Botao>
      <Titulo texto="Dados do cliente" />

      <Botao
        funcao={() => {
          setNumero(0);
        }}
        color="success"
        texto="Comprar"
      ></Botao>
    </div>
  );
}

export default App;
