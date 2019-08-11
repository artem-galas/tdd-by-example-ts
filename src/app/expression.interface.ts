import { Money } from '~/app/money';
import { Bank } from '~/app/bank';

export interface Expression {
  reduce(bank: Bank, to: string): Money;
}
