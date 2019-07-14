export class Dollar {
  constructor(public amount: number) {}

  times(value: number) {
    return new Dollar(this.amount * value);
  }
}
