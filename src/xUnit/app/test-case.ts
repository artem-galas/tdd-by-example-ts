import { TestResult } from '~/xUnit/app/test-result';

export class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  tearDown() {}

  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();

    const methodName = this.name as keyof this;
    const method = (this[methodName] as unknown) as Function;
    method.bind(this)();

    this.tearDown();

    return result;
  }
}
