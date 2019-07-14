export class Money {
  protected readonly amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(object: {}) {
    const money = object as Money;
    return this.amount === money.amount;
  }
}
