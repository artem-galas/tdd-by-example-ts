import { Dollar, Franc } from '.';

export abstract class Money {
  protected readonly amount: number;
  protected readonly _currency: string;
  abstract times(multiplier: number): Money;

  protected constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  get currency(): string {
    return this._currency;
  }

  static dollar(value: number): Money {
    return new Dollar(value, 'USD');
  }

  static franc(value: number): Money {
    return new Franc(value, 'CHF');
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
