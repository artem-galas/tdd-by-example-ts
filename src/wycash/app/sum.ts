import { Expression } from '~/wycash/app/expression.interface';
import { Money } from '~/wycash/app/money';
import { Bank } from '~/wycash/app/bank';

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}

  reduce(bank: Bank, to: string) {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;

    return new Money(amount, to);
  }

  plus(added: Expression): Expression {
    return new Sum(this, added);
  }

  times(multiplier: number) {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }
}
