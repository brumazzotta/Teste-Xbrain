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
    fontFamily: "Open Sans",
    maxWidth: 250,
  },
  priceText: {
    fontSize: 13,
    color: "#546e7a",
    fontFamily: "Open Sans",
  },
  lowText: {
    fontSize: 10,
    color: "#546e7a",
    fontFamily: "Open Sans",
  },
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const valorParcelado = (produtoPreco) => produtoPreco / 12;

const valorAVista = (produtoPreco) => produtoPreco - (produtoPreco / 100) * 10;

function Produto({ produtoDesc, produtoPreco, srcImg, onChangeValue }) {
  const [isMouseOver, setIsMouveOver] = useState(false);
  return (
    <div style={{}}>
      <Grid
        onMouseEnter={(event) => setIsMouveOver(true)}
        onMouseLeave={(event) => setIsMouveOver(false)}
        style={{
          position: "relative",
          minHeight: 300,
        }}
        direction="column"
        container
        alignItems="center"
        justifyContent="center"
        //   style={{ backgroundColor: "red" }}
      >
        <Grid>
          <img
            style={{
              maxWidth: 170,
            }}
            src={srcImg}
          />
        </Grid>

        {isMouseOver ? (
          <HoverComponent
            onChangeValue={onChangeValue}
            produtoPreco={produtoPreco}
          >
            <Grid style={styles.highText}>{produtoDesc}</Grid>
            <Grid style={styles.priceText}>{produtoPreco}</Grid>
            <Grid style={styles.lowText}>
              `em ate 12x de R${" "}
              {produtoPreco ? valorParcelado(produtoPreco) : 0}`
            </Grid>
            <Grid style={styles.lowText}>
              R$ {valorAVista(produtoPreco)} a vista(10% de desconto)
            </Grid>
          </HoverComponent>
        ) : (
          <>
            <Grid style={styles.highText}>{produtoDesc}</Grid>
            <Grid style={styles.priceText}>{produtoPreco}</Grid>
            <Grid style={styles.lowText}>
              `em ate 12x de R${" "}
              {produtoPreco ? valorParcelado(produtoPreco) : 0}`
            </Grid>
            <Grid style={styles.lowText}>
              R$ {valorAVista(produtoPreco)} a vista(10% de desconto)
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export default Produto;
