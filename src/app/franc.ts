import { Money } from '.';

export class Franc extends Money {
  constructor(amount: number, currency = 'CHF') {
    super(amount, currency);
  }

  times(value: number) {
    return Money.franc(this.amount * value);
  }
}
