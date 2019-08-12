import { Money } from '~/wycash/app/money';
import { Bank } from '~/wycash/app/bank';

export interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(added: Expression): Expression;
  times(multiplier: number): Expression;
}
