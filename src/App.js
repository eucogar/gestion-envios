import React from 'react';
import GuiaForm from './components/GuiaForm';
import GuiaList from './components/GuiaList';
import useGuias from './hooks/useGuias'; 
import './App.css';

const App = () => {
  const { guias, agregarGuia, onFinalizarGuia } = useGuias();

  return (
    <div className="app-container">
      <GuiaForm agregarGuia={agregarGuia} />
      <GuiaList guias={guias} onFinalizarGuia={onFinalizarGuia} />
    </div>
  );
};

export default App;
