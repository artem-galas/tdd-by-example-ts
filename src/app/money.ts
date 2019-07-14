export class Money {
  protected readonly amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(object: {}): boolean {
    const money = object as Money;
    if (this.constructor.name === money.constructor.name) {
      return this.amount === money.amount;
    } else {
      return false;
    }
  }
}
