import Button from "@mui/material/Button";

const styles = {
  botao: {
    marginRight: 20,
  },
};

function Botao({ children, color, funcao, texto, ...rest }) {
  return (
    <Button
      style={styles.botao}
      variant="contained"
      color={color}
      onClick={funcao}
      {...rest}
    >
      {children ? children : texto || "Botão Bugado"}
    </Button>
  );
}

export default Botao;
