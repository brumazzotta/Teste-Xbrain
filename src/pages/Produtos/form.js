import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

function Form() {
  return (
    <>
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
              focused
              placeholder="Nome do cliente aqui"
              helperText="Campo obrigatorio"
              id="nome"
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
              focused
              placeholder="Digite seu email"
              id="email"
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
            <TextField label="Sexo" focused placeholder="Selecione" id="sexo" />
          </Box>
        </Grid>
        <br></br>
      </Grid>
    </>
  );
}

export default Form;
