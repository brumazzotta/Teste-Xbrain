
import './App.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';

function App() {
  return (
    <div className="App">
      <Titulo texto="Produtos" />
      <Titulo texto="Dados do cliente" />
      <Subtitulo texto="Teste de Subtitulo" />
    </div>
  );
}

export default App;
