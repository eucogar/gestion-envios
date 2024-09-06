import React from 'react';
import '../css/GuiaList.css';

function GuiaList({ guias, onFinalizarGuia }) {
  return (
    <div className="guia-list-container">
      <h2>Lista de Guías</h2>
      <ul className="guia-list">
        {guias.map((guia) => (
          <li key={guia.numeroGuia} className="guia-item">
            <div className="guia-info">
              <p>
                <strong>Número de Guía:</strong> {guia.numeroGuia}
              </p>
              <p>
                <strong>Destinatario:</strong> {guia.destinatario}
              </p>
              <p>
                <strong>Estado:</strong> <span className={`estado ${guia.estado.toLowerCase()}`}>{guia.estado}</span>
              </p>
              <p>
                <strong>Valor Total:</strong> ${guia.valorTotal.toFixed(2)}
              </p>
              <button className="finalizar-button" onClick={() => onFinalizarGuia(guia.numeroGuia)}>
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
