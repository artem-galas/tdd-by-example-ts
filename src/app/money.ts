export class Money {
  protected readonly amount: number;
  protected readonly _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  get currency(): string {
    return this._currency;
  }

  static dollar(value: number): Money {
    return new Money(value, 'USD');
  }

  static franc(value: number): Money {
    return new Money(value, 'CHF');
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
}
