import React,{ useState } from 'react';
import './App.css';

import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperiencia from './componentes/SecaoExperiencia';
import Rodape from './componentes/Rodape';

function App() {

  const [ ehTemaDark, setEhTemaDark] = useState(false);

  function Alterar(){
      if(ehTemaDark === false){
          setEhTemaDark(!ehTemaDark)
      }else{
          setEhTemaDark(!ehTemaDark)
      }
  }  

  return (
    <div className="App">
      <Topo Alterar={Alterar} ehTemaDark={ehTemaDark} />
      <SecaoBanner ehTemaDark={ehTemaDark} />
      <SecaoExperiencia ehTemaDark={ehTemaDark} />
      <Rodape ehTemaDark={ehTemaDark} />
    </div>
  );
}

export default App;
