import { Money } from '.';

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(value: number) {
    return new Franc(this.amount * value);
  }
}
