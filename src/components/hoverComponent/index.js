import { TextField } from "@mui/material";
import React from "react";
import { default as Add } from "../../imagens/baseline-add-24px.svg";
import { default as Remove } from "../../imagens/baseline-remove-24px.svg";
import style from "./style";

const HoverComponent = ({
  children,
  onChangeValue,
  produtoPreco,
  qtd,
  alterQtd,
}) => {
  const onClickOperation = (operation) => {
    if (operation === "sub" && qtd === 0) return;
    alterQtd(operation);
    if (qtd >= 0 && operation == "add") {
      onChangeValue(operation, produtoPreco);
    } else {
      onChangeValue(operation, produtoPreco);
    }
  };
  return (
    <div style={style.mainDiv}>
      <div style={style.divChildren}>
        {children}
        <div style={style.divBase}>
          <div onClick={() => onClickOperation("sub")} style={style.circulo}>
            <img style={style.img} src={Remove} />
          </div>
          <div style={style.textArea}>
            <TextField
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              id="outlined-basic"
              variant="outlined"
              value={qtd}
            />
          </div>
          <div onClick={() => onClickOperation("add")} style={style.circulo}>
            <span>
              <img style={style.img} src={Add} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverComponent;
