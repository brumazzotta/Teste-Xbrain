import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

import HoverComponent from "../hoverComponent";
import { useState } from "react";

const styles = {
  botao: {
    marginRight: 20,
  },
  highText: {
    fontSize: 15,
    color: "#546e7a",
    maxWidth: 250,
  },
  priceText: {
    fontSize: 24,
    color: "#546e7a",
    fontWeight: "bold",
    marginTop: 15,
  },
  lowText: {
    marginTop: 9,
    fontSize: 12,
    lineHeight: 1,
    color: "#90A4AE",
    textAlign: "left",
  },
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const valorParcelado = (produtoPreco) => Math.trunc(produtoPreco * 12) / 100;
const valorAVista = (produtoPreco) => produtoPreco - (produtoPreco / 100) * 10;

function Produto({ produtoDesc, produtoPreco, srcImg, onChangeValue }) {
  const [isMouseOver, setIsMouveOver] = useState(false);
  const [qtd, setQtd] = useState(0);

  const onClickOperation = (operation) => {
    if (qtd === 0 && operation === "sub") return;

    operation === "add" ? setQtd(qtd + 1) : setQtd(qtd - 1);
  };

  return (
    <div style={{}}>
      <Grid
        onMouseEnter={(event) => setIsMouveOver(true)}
        onMouseLeave={(event) => setIsMouveOver(false)}
        style={{
          position: "relative",
          minHeight: 382,
          paddingTop: 40,
        }}
        direction="column"
        container
        //   style={{ backgroundColor: "red" }}
      >
        <Grid style={{ textAlign: "center" }}>
          <img
            style={{
              alignItems: "center",
              maxWidth: 220,
            }}
            src={srcImg}
          />
        </Grid>

        {isMouseOver ? (
          <HoverComponent
            qtd={qtd}
            alterQtd={onClickOperation}
            onChangeValue={onChangeValue}
            produtoPreco={produtoPreco}
          >
            <Grid style={styles.highText}>{produtoDesc}</Grid>
            <Grid style={styles.priceText}>R$ {produtoPreco},00</Grid>
            <Grid style={styles.lowText}>
              em ate 12x de R$
              {produtoPreco ? valorParcelado(produtoPreco) : 0} <br></br>
              R$ {valorAVista(produtoPreco)} a vista (10% de desconto)
            </Grid>
          </HoverComponent>
        ) : (
          <>
            <Grid style={styles.highText}>{produtoDesc}</Grid>
            <Grid style={styles.priceText}>R$ {produtoPreco},00</Grid>
            <Grid style={styles.lowText}>
              em ate 12x de R$
              {produtoPreco ? valorParcelado(produtoPreco) : 0} <br></br>
              R$ {valorAVista(produtoPreco)} a vista (10% de desconto)
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export default Produto;
