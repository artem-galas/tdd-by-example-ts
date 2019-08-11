export class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  hashCode(): string {
    return `${this.from}-${this.to}`;
  }
}
