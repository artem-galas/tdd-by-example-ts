export class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  run() {
    this.setUp();
    const methodName = this.name as keyof this;
    const method = (this[methodName] as unknown) as Function;

    method.bind(this);
  }
}