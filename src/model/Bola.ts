// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(
    corParametro: string,
    circunferenciaParametro: number,
    materialParametro: string
  ) {
    this.cor = corParametro;
    this.circunferencia = circunferenciaParametro;
    this.material = materialParametro;
  }

  trocarCor(corParametro: string): void {
    this.cor = corParametro;
  }

  mostrarCor(): void {
    console.log(this.cor);
  }
}

export default Bola;
