export class Dollar {
  constructor(public amount: number) {}

  times(val: number) {
    this.amount *= val;
  }
}
