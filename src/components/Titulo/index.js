function Titulo({ texto, ...rest }) {
  return <h2 {...rest}>{texto}</h2>;
}

export default Titulo;
