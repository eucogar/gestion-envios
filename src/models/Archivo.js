export class Archivo {
    constructor() {
      this.guias = [];
    }
  
    agregarGuia(guia) {
      this.guias.push(guia);
    }
  
    buscarGuiaPorNumero(numeroGuia) {
      return this.guias.find(guia => guia.numeroGuia === numeroGuia);
    }
  
    buscarGuiasPorDestinatario(destinatario) {
      return this.guias.filter(guia => guia.destinatario === destinatario);
    }
  
    consultarGuiasPorEstado(estado) {
      return this.guias.filter(guia => guia.estado === estado);
    }
  }
  