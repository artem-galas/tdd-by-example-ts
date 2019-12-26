import { TestCase } from '~/xUnit/app/test-case';
import { WasRun } from '~/xUnit/app/was-run';
import { TestResult } from '~/xUnit/app/test-result';

class TestCaseTest extends TestCase {
  test: WasRun | undefined;

  testResult() {
    const test = new WasRun('testMethod');
    const result = test.run();
    console.assert('1 run, 0 failed' === result.summary());
  }

  testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    const result = test.run();
    console.assert('1 run, 1 failed' === result.summary());
  }

  testTemplateMethod() {
    this.test = new WasRun('testMethod');
    this.test.run();

    console.assert('setUp, testMethod, tearDown' === this.test.log);
  }

  testFailedResultFormatting() {
    const result = new TestResult();
    result.testStarted();
    result.testFailed();

    console.assert('1 run, 1 failed' === result.summary());
  }
}

const testSetUp = new TestCaseTest('testTemplateMethod').run();
const testResult = new TestCaseTest('testResult').run();
const testFailedResult = new TestCaseTest('testFailedResult').run();
const testFailedResultFormatting = new TestCaseTest(
  'testFailedResultFormatting'
).run();
