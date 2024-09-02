import React, { useState } from 'react';
import GuiaForm from './components/GuiaForm';
import GuiaList from './components/GuiaList';
import { Archivo } from './models/Archivo';

function App() {
  const [archivo] = useState(new Archivo());
  const [guias, setGuias] = useState([]);

  const handleAddGuia = (nuevaGuia) => {
    archivo.agregarGuia(nuevaGuia);
    setGuias([...archivo.guias]);
  };

  const handleFinalizarGuia = (numeroGuia) => {
    const guia = archivo.buscarGuiaPorNumero(numeroGuia);
    if (guia) {
      guia.cambiarEstadoAFinalizada();
      setGuias([...archivo.guias]);
    }
  };

  return (
    <div className="App">
      <h1>Gestión de Envíos</h1>
      <GuiaForm onAddGuia={handleAddGuia} />
      <GuiaList guias={guias} onFinalizarGuia={handleFinalizarGuia} />
    </div>
  );
}

export default App;
