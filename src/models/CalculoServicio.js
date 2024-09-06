export class CalculoSobre {
    calcular() {
      return 5000 + 10000;
    }
  }
  
  export class CalculoCaja {
    calcular(peso) {
      return 5000 + peso * 1000 + 25000;
    }
  }
  
  export class CalculoPaquete {
    calcular(peso) {
      return 5000 + peso * 1000;
    }
  }