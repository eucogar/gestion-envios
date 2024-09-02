import React, { useState } from 'react';
import { TipoServicio } from '../models/enums';
import { Guia } from '../models/Guia';

function GuiaForm({ onAddGuia }) {
  const [numeroGuia, setNumeroGuia] = useState('');
  const [tipoServicio, setTipoServicio] = useState(TipoServicio.SOBRE);
  const [peso, setPeso] = useState(0);
  const [valorDeclarado, setValorDeclarado] = useState(0);
  const [esInternacional, setEsInternacional] = useState(false);
  const [destinatario, setDestinatario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaGuia = new Guia(numeroGuia, tipoServicio, peso, valorDeclarado, esInternacional, destinatario);
    onAddGuia(nuevaGuia);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={numeroGuia}
        onChange={(e) => setNumeroGuia(e.target.value)}
        placeholder="Número de Guía"
        required
      />
      <select value={tipoServicio} onChange={(e) => setTipoServicio(e.target.value)}>
        <option value={TipoServicio.SOBRE}>Sobre</option>
        <option value={TipoServicio.CAJA}>Caja</option>
        <option value={TipoServicio.PAQUETE}>Paquete</option>
      </select>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(parseFloat(e.target.value))}
        placeholder="Peso (kg)"
        required
      />
      <input
        type="number"
        value={valorDeclarado}
        onChange={(e) => setValorDeclarado(parseFloat(e.target.value))}
        placeholder="Valor Declarado"
        required
      />
      <input
        type="checkbox"
        checked={esInternacional}
        onChange={(e) => setEsInternacional(e.target.checked)}
      />
      <label>¿Es Internacional?</label>
      <input
        type="text"
        value={destinatario}
        onChange={(e) => setDestinatario(e.target.value)}
        placeholder="Destinatario"
        required
      />
      <button type="submit">Agregar Guía</button>
    </form>
  );
}

export default GuiaForm;
