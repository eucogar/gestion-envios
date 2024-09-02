import React from 'react';

function GuiaList({ guias, onFinalizarGuia }) {
  return (
    <div>
      <h2>Lista de Guías</h2>
      <ul>
        {guias.map((guia) => (
          <li key={guia.numeroGuia}>
            <div>
              <strong>Número de Guía:</strong> {guia.numeroGuia} <br />
              <strong>Destinatario:</strong> {guia.destinatario} <br />
              <strong>Estado:</strong> {guia.estado} <br />
              <strong>Valor Total:</strong> {guia.valorTotal} <br />
              <button onClick={() => onFinalizarGuia(guia.numeroGuia)}>
                Finalizar Entrega
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuiaList;
