import { Expression } from '~/app/expression.interface';
import { Money } from '~/app/money';

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(to: string) {
    const amount = this.augend.amount + this.addend.amount;

    return new Money(amount, to);
  }
}
