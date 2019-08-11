import { Expression } from '~/app/expression.interface';
import { Money } from '~/app/money';
import { Bank } from '~/app/bank';

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(bank: Bank, to: string) {
    const amount = this.augend.amount + this.addend.amount;

    return new Money(amount, to);
  }
}
