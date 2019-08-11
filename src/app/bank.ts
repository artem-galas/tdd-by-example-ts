import { Expression } from '~/app/expression.interface';
import { Money } from '~/app/money';
import { Pair } from '~/app/pair';

export class Bank {
  private rates = new Map<string, number>();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }
    const rate = this.rates.get(new Pair(from, to).hashCode());

    return rate!;
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }
}
