import { Dollar, Franc } from '.';

export abstract class Money {
  protected readonly amount: number;
  abstract times(multiplier: number): Money;

  protected constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(value: number): Money {
    return new Dollar(value);
  }

  static franc(value: number): Money {
    return new Franc(value);
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
