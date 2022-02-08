import Botao from "../../components/Buttons";
import purchase from "../../imagens/purchase.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const style = {
  mainDiv: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eceff1",
    flex: 1,
  },
  paper: {
    background: "#ffffff",
    width: 350,
    height: 470,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  nameDiv: {
    fontSize: 24,
    color: "#546e7a",
    fontWeight: "bold",
  },
  msgDiv: {
    marginTop: 20,
    fontSize: 19,
    color: "#546e7a",
    fontWeight: 500,
  },
  priceDiv: {
    fontSize: 19,
    color: "#019cdf",
    fontWeight: 500,
  },
  img: {
    height: 130,
    width: 160,
    marginTop: 40,
  },
};
const Finalizar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { nomeClient, valorDaCompra } = location.state;
  // for location state

  return nomeClient && valorDaCompra ? (
    <div style={style.mainDiv}>
      <div style={style.paper}>
        <div style={style.nameDiv}>{nomeClient},</div>
        <div style={style.msgDiv}>
          Sua compra no valor de{" "}
          <span style={style.priceDiv}>R$ {valorDaCompra} </span> <br></br>
          foi finalizada com sucesso
        </div>
        <img style={style.img} src={purchase} alt="img purchase" />
        <Botao
          onClick={() => navigate("/")}
          style={{ backgroundColor: "#ff9800", marginTop: 40 }}
        >
          INICIAR NOVA COMPRA
        </Botao>
      </div>
    </div>
  ) : (
    <p>Compra não localizada</p>
  );
};
export default Finalizar;
