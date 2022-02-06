import { useState } from "react";
import { Grid } from "@mui/material";
import Produto from "../../components/Produto";
import Titulo from "../../components/Titulo";
import { Divider } from "@mui/material";
import Formulario from "../../components/Formulario";
import Botao from "../../components/Buttons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { grid } from "@mui/system";

const produtos = [
  {
    imagem: require("../../imagens/produto-01.jpeg"),
    produtoDesc: "AirPods Apple Fones de Ouvido",
    produtoPreco: 1499.0,
  },
  {
    imagem: require("../../imagens/produto-02.jpeg"),
    produtoDesc: "Capa de silicone para iPhone8/7 cor Areia - rosa",
    produtoPreco: 299.0,
  },
  {
    imagem: require("../../imagens/produto-03.jpeg"),
    produtoDesc: "Apple Pencil",
    produtoPreco: 729.0,
  },
  {
    imagem: require("../../imagens/produto-04.jpeg"),
    produtoDesc: "Magic Mouse 2 - Prateado",
    produtoPreco: 549.0,
  },
  {
    imagem: require("../../imagens/produto-05.jpeg"),
    produtoDesc: "Caixa prateada de aluminio com pulseira esportiva branca",
    produtoPreco: 2899.0,
  },
  {
    imagem: require("../../imagens/produto-06.jpeg"),
    produtoDesc: "Cabo de lightnint para USB (1m)",
    produtoPreco: 149.0,
  },
  {
    imagem: require("../../imagens/produto-07.jpeg"),
    produtoDesc: "Smar Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)",
    produtoPreco: 1099.0,
  },
  {
    imagem: require("../../imagens/produto-08.jpeg"),
    produtoDesc: "Carregador USB de 5W Apple",
    produtoPreco: 149.0,
  },
];
function Produtos() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <Titulo texto="Produtos" />
      <Divider></Divider>
      <br></br>
      <br></br>
      <Grid container spacing={1} style={{}}>
        {produtos.map((p) => (
          <Grid item lg={3} sm={4} xs={12}>
            <Produto
              srcImg={p.imagem}
              produtoDesc={p.produtoDesc}
              produtoPreco={p.produtoPreco}
            />
          </Grid>
        ))}
        <br></br>
      </Grid>
      <Titulo texto="Dados do Cliente" />
      <Divider></Divider>
      <br></br>
      <Grid container spacing={1} style={{}}>
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Nome"
              color="error"
              focused
              placeholder="Nome do cliente aqui"
              helperText="Campo obrigatorio"
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Email"
              color="error"
              focused
              placeholder="Digite seu email"
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Sexo"
              color="error"
              focused
              placeholder="Selecione"
            />
          </Box>
        </Grid>
        <br></br>
      </Grid>
      <Grid container spacing={10} style={{}} justifyContent="right">
        <Grid item xs={3}>
          <Botao color="error">Finalizar Compra</Botao>
        </Grid>
      </Grid>
    </>
  );
}

export default Produtos;
