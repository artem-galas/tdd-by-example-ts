import { Money } from '~/app/money';

export interface Expression {
  reduce(to: string): Money;
}
