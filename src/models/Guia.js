import { TipoServicio, EstadoGuia } from './enums';

export class Guia {
  constructor(numeroGuia, tipoServicio, peso, valorDeclarado, esInternacional, destinatario) {
    this.numeroGuia = numeroGuia;
    this.tipoServicio = tipoServicio;
    this.peso = peso;
    this.valorDeclarado = valorDeclarado;
    this.esInternacional = esInternacional;
    this.estado = EstadoGuia.DESPACHO;
    this.valorTotal = 0;
    this.destinatario = destinatario;
  }

  calcularValorTotal() {
    const valorBase = 5000;
    let costo = valorBase;

    switch (this.tipoServicio) {
      case TipoServicio.SOBRE:
        costo += 10000;
        break;
      case TipoServicio.CAJA:
        costo += this.peso + 25000;
        break;
      case TipoServicio.PAQUETE:
        costo += this.peso;
        break;
      default:
        break;
    }

    if (this.esInternacional) {
      costo *= 1.25; // Aumento del 25%
    }

    this.valorTotal = costo;
  }

  cambiarEstadoAFinalizada() {
    this.calcularValorTotal();
    this.estado = EstadoGuia.FINALIZADA;
  }
}
