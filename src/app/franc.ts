import { Money } from '~/app/money';

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(value: number) {
    return new Franc(this.amount * value);
  }
}
