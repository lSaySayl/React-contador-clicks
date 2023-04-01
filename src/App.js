import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [clics, setclics] = useState(0);

  let contar = () => {
    setclics(clics + 1);
  }

  let reiniciar = () => {
    setclics(clics * 0);
  }



  return (
    <div className="App">

      <div className='contenedor-titulo'>
        <h1>Contador</h1>
      </div>

      <div className='contenedor-contador'>

        <Contador
          numClics={clics}
        />
        
        <Boton
          texto='Click'
          btnClic={true}
          manejarClick={contar} />

        <Boton
          texto='Reiniciar'
          btnClic={false}
          manejarClick={reiniciar} />

      </div>

    </div>
  );
}

export default App;
