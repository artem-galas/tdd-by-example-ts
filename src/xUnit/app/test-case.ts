import { TestResult } from '~/xUnit/app/test-result';

export class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  tearDown() {}

  run(result: TestResult) {
    result.testStarted();
    this.setUp();

    try {
      const methodName = this.name as keyof this;
      const method = (this[methodName] as unknown) as Function;
      method.bind(this)();
    } catch (error) {
      result.testFailed();
    }

    this.tearDown();

    return result;
  }
}
