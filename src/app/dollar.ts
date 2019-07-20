import { Money } from '.';

export class Dollar extends Money {
  constructor(amount: number, currency = 'USD') {
    super(amount, currency);
  }

  times(value: number) {
    return Money.dollar(this.amount * value);
  }
}
