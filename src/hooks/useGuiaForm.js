// hooks/useGuiaForm.js
import { useState } from 'react';

const useGuiaForm = () => {
  const [numeroGuia, setNumeroGuia] = useState('');
  const [tipoServicio, setTipoServicio] = useState('SOBRE');
  const [peso, setPeso] = useState('');
  const [valorDeclarado, setValorDeclarado] = useState('');
  const [esInternacional, setEsInternacional] = useState(false);
  const [destinatario, setDestinatario] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefonoDestinatario, setTelefonoDestinatario] = useState('');
  const [remitente, setRemitente] = useState('');
  const [telefonoRemitente, setTelefonoRemitente] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('DESPACHO');

  const calcularValorTotal = () => {
    const valorBase = 5000;
    let valorTotal = 0;

    switch (tipoServicio) {
      case 'SOBRE':
        valorTotal = valorBase + 10000;
        break;
      case 'PAQUETE':
        valorTotal = valorBase + parseFloat(peso) * 1000;
        break;
      case 'CAJA':
        valorTotal = valorBase + parseFloat(peso) * 1000 + 25000;
        break;
      default:
        valorTotal = valorBase;
    }

    if (esInternacional) {
      valorTotal *= 1.25;
    }

    return valorTotal;
  };

  const resetForm = () => {
    setNumeroGuia('');
    setPeso('');
    setValorDeclarado('');
    setEsInternacional(false);
    setDestinatario('');
    setDireccion('');
    setTelefonoDestinatario('');
    setRemitente('');
    setTelefonoRemitente('');
    setDescripcion('');
  };

  return {
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
    estado,
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
  };
};

export default useGuiaForm;
