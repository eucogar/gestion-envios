import { EstadoGuia } from './enums';
import { CalculadoraCostoGuia } from './CalculadoraCostoGuia';

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
    this.valorTotal = CalculadoraCostoGuia.calcular(this);
  }

  cambiarEstadoAFinalizada() {
    this.calcularValorTotal();
    this.estado = EstadoGuia.FINALIZADA;
  }
}