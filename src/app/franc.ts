export class Franc {
  private readonly amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(value: number) {
    return new Franc(this.amount * value);
  }

  equals(object: {}) {
    const franc = object as Franc;
    return this.amount === franc.amount;
  }
}
