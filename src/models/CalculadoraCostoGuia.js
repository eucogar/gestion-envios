import { TipoServicio } from './enums';
import { CalculoSobre, CalculoCaja, CalculoPaquete } from './CalculoServicio';

export class CalculadoraCostoGuia {
  static calcular(guia) {
    const valorBase = 5000;
    let costo;

    switch (guia.tipoServicio) {
      case TipoServicio.SOBRE:
        costo = new CalculoSobre().calcular();
        break;
      case TipoServicio.CAJA:
        costo = new CalculoCaja().calcular(guia.peso);
        break;
      case TipoServicio.PAQUETE:
        costo = new CalculoPaquete().calcular(guia.peso);
        break;
      default:
        costo = valorBase;
    }

    if (guia.esInternacional) {
      costo *= 1.25; // Aumento del 25%
    }

    return costo;
  }
}
