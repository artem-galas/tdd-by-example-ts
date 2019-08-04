import { Expression } from '~/app/expression.interface';
import { Sum } from '~/app/sum';

export class Money implements Expression {
  protected readonly _amount: number;
  protected readonly _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  get currency(): string {
    return this._currency;
  }

  get amount(): number {
    return this._amount;
  }

  static dollar(value: number): Money {
    return new Money(value, 'USD');
  }

  static franc(value: number): Money {
    return new Money(value, 'CHF');
  }

  plus(added: Money): Expression {
    return new Sum(this, added);
  }

  toString() {
    return `${this.amount} ${this.currency}`;
  }

  equals(object: {}): boolean {
    const money = object as Money;
    return this.amount === money.amount && this.currency === money.currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  reduce(to: string) {
    return this;
  }
}
