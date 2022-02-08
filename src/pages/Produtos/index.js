import { useState } from "react";
import { Grid } from "@mui/material";
import Produto from "../../components/Produto";
import Titulo from "../../components/Titulo";
import { Divider } from "@mui/material";
import Form from "./form";
import Botao from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

const produtos = [
  {
    imagem: require("../../imagens/produto-01.jpeg"),
    produtoDesc: "AirPods Apple Fones de Ouvido",
    produtoPreco: 1499.0,
    qtd: 0,
  },
  {
    imagem: require("../../imagens/produto-02.jpeg"),
    produtoDesc: "Capa de silicone para iPhone8/7 cor Areia - rosa",
    produtoPreco: 299.0,
    qtd: 0,
  },
  {
    imagem: require("../../imagens/produto-03.jpeg"),
    produtoDesc: "Apple Pencil",
    produtoPreco: 729.0,
    qtd: 0,
  },
  {
    imagem: require("../../imagens/produto-04.jpeg"),
    produtoDesc: "Magic Mouse 2 - Prateado",
    produtoPreco: 549.0,
    qtd: 0,
  },
  {
    imagem: require("../../imagens/produto-05.jpeg"),
    produtoDesc: "Caixa prateada de aluminio com pulseira esportiva branca",
    produtoPreco: 2899.0,
    qtd: 0,
  },
  {
    imagem: require("../../imagens/produto-06.jpeg"),
    produtoDesc: "Cabo de lightnint para USB (1m)",
    produtoPreco: 149.0,
    qtd: 0,
  },
  {
    imagem: require("../../imagens/produto-07.jpeg"),
    produtoDesc: "Smar Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)",
    produtoPreco: 1099.0,
    qtd: 0,
  },
  {
    imagem: require("../../imagens/produto-08.jpeg"),
    produtoDesc: "Carregador USB de 5W Apple",
    produtoPreco: 149.0,
    qtd: 0,
  },
];
function Produtos() {
  const onHandleValorFinal = (operation, valorProduto) => {
    console.log(operation, valorProduto);
    operation === "add"
      ? setValorFinal(valorFinal + valorProduto)
      : setValorFinal(valorFinal - valorProduto);
  };
  const navigate = useNavigate();
  const [valorFinal, setValorFinal] = useState(0);
  const nomeClient = () => document.getElementById("nome").value;

  const onFinalizar = () => {
    if (nomeClient().length < 3) {
      window.alert("nome cliente não pode ser nulo");
      return;
    }
    navigate("/finalizar", {
      state: { nomeClient: nomeClient(), valorDaCompra: valorFinal },
    });
  };

  return (
    <div
      style={{
        maxWidth: 1140,
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <Titulo texto="Produtos" />
      <Divider></Divider>

      <Grid container spacing={1} style={{}}>
        {produtos.map((p) => (
          <Grid item lg={3} sm={4} xs={12}>
            <Produto
              srcImg={p.imagem}
              produtoDesc={p.produtoDesc}
              produtoPreco={p.produtoPreco}
              qtd={p.qtd}
              onChangeValue={onHandleValorFinal}
              valor={valorFinal}
            />
          </Grid>
        ))}
        <br></br>
      </Grid>
      <Titulo texto="Dados do Cliente" />
      <Divider></Divider>
      <br></br>
      <Form />
      <div>
        <Grid container spacing={10} style={{}} justifyContent="right">
          <Grid item xs={3}>
            <h2>R$ {valorFinal}</h2>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={10} style={{}} justifyContent="right">
        <Grid item xs={3} style={{ textAlign: "right", alignSelf: "right" }}>
          <Botao
            style={{ backgroundColor: "#ff9800" }}
            onClick={() => onFinalizar()}
          >
            Finalizar Compra
          </Botao>
        </Grid>
      </Grid>
    </div>
  );
}

export default Produtos;
