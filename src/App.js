import './App.css';

import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperiencia from './componentes/SecaoExperiencia';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Topo />
      <SecaoBanner />
      <SecaoExperiencia />
      <Rodape />
    </div>
  );
}

export default App;
