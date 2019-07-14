export class Dollar {
  constructor(public amount: number) {}

  times(value: number) {
    return new Dollar(this.amount * value);
  }

  equals(object: {}) {
    const dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}
