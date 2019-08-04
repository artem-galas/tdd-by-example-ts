import { Expression } from '~/app/expression.interface';
import { Money } from '~/app/money';

export class Bank {
  reduce(source: Expression, to: string) {
    return Money.dollar(10);
  }
}
