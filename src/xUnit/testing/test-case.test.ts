import { TestCase } from '~/xUnit/app/test-case';
import { WasRun } from '~/xUnit/app/was-run';
import { TestResult } from '~/xUnit/app/test-result';
import { TestSuite } from '~/xUnit/app/test-suite';

import * as assert from 'assert';

class TestCaseTest extends TestCase {
  result: TestResult | undefined;

  setUp() {
    this.result = new TestResult();
  }

  testResult() {
    const test = new WasRun('testMethod');
    test.run(this.result!);

    console.log(test.log);

    assert('1 run, 0 failed' === this.result!.summary());
  }

  testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    test.run(this.result!);

    assert('1 run, 1 failed' === this.result!.summary());
  }

  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run(this.result!);

    assert('setUp, testMethod, tearDown' === test.log);
  }

  testFailedResultFormatting() {
    this.result!.testStarted();
    this.result!.testFailed();

    console.assert('1 run, 1 failed' === this.result!.summary());
  }

  testTestSuite() {
    const testSuite = new TestSuite();
    testSuite.add(new WasRun('testMethod'));
    testSuite.add(new WasRun('testBrokenMethod'));
    testSuite.run(this.result!);
    assert('2 run, 1 failed' === this.result!.summary());
  }
}

const suite = new TestSuite();

suite.add(new TestCaseTest('testResult'));
suite.add(new TestCaseTest('testFailedResult'));
suite.add(new TestCaseTest('testTemplateMethod'));
suite.add(new TestCaseTest('testFailedResultFormatting'));
suite.add(new TestCaseTest('testTestSuite'));

const result = new TestResult();
suite.run(result);
console.log(result.summary());
