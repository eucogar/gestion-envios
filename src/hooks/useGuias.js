// hooks/useGuias.js
import { useState } from 'react';

const useGuias = () => {
  const [guias, setGuias] = useState([]);

  const agregarGuia = (guia) => {
    setGuias([...guias, guia]);
  };

  const onFinalizarGuia = (numeroGuia) => {
    setGuias((prevGuias) =>
      prevGuias.map((guia) =>
        guia.numeroGuia === numeroGuia ? { ...guia, estado: 'FINALIZADA' } : guia
      )
    );
  };

  return {
    guias,
    agregarGuia,
    onFinalizarGuia,
  };
};

export default useGuias;
