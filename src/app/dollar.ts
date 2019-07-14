import { Money } from '~/app/money';

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(value: number) {
    return new Dollar(this.amount * value);
  }
}
