import { TestCase } from '~/xUnit/app/test-case';
import { TestResult } from '~/xUnit/app/test-result';

export class TestSuite {
  tests: TestCase[] = [];

  add(test: TestCase) {
    this.tests = [...this.tests, test];
  }

  run(result: TestResult) {
    this.tests.forEach(test => {
      test.run(result);
    });
  }
}
