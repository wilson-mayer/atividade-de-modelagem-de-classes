// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Contador {
  contador: number;

  constructor(contador: number) {
    this.contador = 0;
  }

  zerar(): void {
    this.contador = 0;
  }
  incrementar(): void {
    this.contador++;
  }
  retornar() {
    return this.contador;
  }
}

export default Contador;
