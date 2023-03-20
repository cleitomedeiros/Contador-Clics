import './App.css';
import freeCodeCampLogo from './imagenes/bin.png';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {

    setNumClics(0);

  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img
      className='freecodecamp-logo'
      src={freeCodeCampLogo}
      alt='Logo de freeCodeCamp' />
     </div>
     <div className='contador'> 
      <Contador numClics={numClics} />
     </div>
     <div className='contador-principal'>
      <Boton 
      texto='Clic'
      botonClick={true}
      manejarClick={manejarClick}/>
      <Boton
      texto='Reiniciar'
      botonClick={false} 
      manejarClick={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
