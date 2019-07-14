export class Dollar {
  private readonly amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(value: number) {
    return new Dollar(this.amount * value);
  }

  equals(object: {}) {
    const dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}
