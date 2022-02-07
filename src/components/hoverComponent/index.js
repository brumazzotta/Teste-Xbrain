import { TextField } from "@mui/material";
import React, { useState } from "react";

const style = (theme) => ({
  root: {},
  circulo: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    backgroundColor: "gray",
  },
});

const HoverComponent = ({
  children,
  qtdProduto,
  onChangeValue,
  produtoPreco,
}) => {
  const { circulo } = style;
  const [qtd, setQtd] = useState(0);

  const onClickOperation = (operation) => {
    if (operation === "sub" && qtd === 0) return;

    if (qtd >= 0 && operation == "add") {
      setQtd(qtd + 1);
      onChangeValue(operation, produtoPreco);
    } else {
      setQtd(qtd - 1);
      onChangeValue(operation, produtoPreco);
    }
  };
  return (
    <div
      style={{
        // backgroundColor: "blue",
        position: "absolute",

        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        width: "100%",
        height: "100%",
        opacity: 0.6,
        display: "flex",
        alignItems: "flex-end",
        // display: "none",
      }}
    >
      <div
        style={{
          // backgroundColor: "red",
          width: "100%",
          height: "60%",
          backgroundColor: "#fff",
          opacity: 0.97,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            onClick={() => onClickOperation("sub")}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "gray",
            }}
          >
            -
          </div>
          <div style={{ width: 100, marginLeft: 30, marginRight: 30 }}>
            <TextField id="outlined-basic" variant="outlined" value={qtd} />
          </div>
          <div
            onClick={() => onClickOperation("add")}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "gray",
            }}
          >
            <span style={{ verticalAlign: "middle" }}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverComponent;
