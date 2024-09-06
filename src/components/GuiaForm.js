import React from 'react';
import useGuiaForm from '../hooks/useGuiaForm';
import '../css/GuiaForm.css';

const GuiaForm = ({ agregarGuia }) => {
  const {
    numeroGuia,
    tipoServicio,
    peso,
    valorDeclarado,
    esInternacional,
    destinatario,
    direccion,
    telefonoDestinatario,
    remitente,
    telefonoRemitente,
    descripcion,
    setNumeroGuia,
    setTipoServicio,
    setPeso,
    setValorDeclarado,
    setEsInternacional,
    setDestinatario,
    setDireccion,
    setTelefonoDestinatario,
    setRemitente,
    setTelefonoRemitente,
    setDescripcion,
    calcularValorTotal,
    resetForm
  } = useGuiaForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const valorTotal = calcularValorTotal();

    const nuevaGuia = {
      numeroGuia,
      tipoServicio,
      peso,
      valorDeclarado,
      esInternacional,
      destinatario,
      direccion,
      telefonoDestinatario,
      remitente,
      telefonoRemitente,
      descripcion,
      estado: 'DESPACHO',
      valorTotal,
    };

    agregarGuia(nuevaGuia);
    resetForm(); // Resetea el formulario después de agregar la guía
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Nueva Guía</h2>
      
      <div className="form-group">
        <label>Número de Guía:</label>
        <input
          type="text"
          value={numeroGuia}
          onChange={(e) => setNumeroGuia(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Tipo de Servicio:</label>
        <select
          value={tipoServicio}
          onChange={(e) => setTipoServicio(e.target.value)}
        >
          <option value="SOBRE">Sobre</option>
          <option value="CAJA">Caja</option>
          <option value="PAQUETE">Paquete</option>
        </select>
      </div>

      <div className="form-group">
        <label>Peso (Kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Valor Declarado:</label>
        <input
          type="number"
          value={valorDeclarado}
          onChange={(e) => setValorDeclarado(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Internacional:</label>
        <input
          type="checkbox"
          checked={esInternacional}
          onChange={(e) => setEsInternacional(e.target.checked)}
        />
      </div>

      <div className="form-group">
        <label>Destinatario:</label>
        <input
          type="text"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Dirección del Destinatario:</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Teléfono del Destinatario:</label>
        <input
          type="tel"
          value={telefonoDestinatario}
          onChange={(e) => setTelefonoDestinatario(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Remitente:</label>
        <input
          type="text"
          value={remitente}
          onChange={(e) => setRemitente(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Teléfono del Remitente:</label>
        <input
          type="tel"
          value={telefonoRemitente}
          onChange={(e) => setTelefonoRemitente(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Descripción Breve de la Mercancía:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit">Registrar Guía</button>
    </form>
  );
};

export default GuiaForm;
