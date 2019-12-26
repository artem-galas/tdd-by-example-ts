import { TestCase } from '~/xUnit/app/test-case';
import { WasRun } from '~/xUnit/app/was-run';

class TestCaseTest extends TestCase {
  test: WasRun | undefined;

  testTemplateMethod() {
    this.test = new WasRun('testMethod');
    this.test.run();

    console.assert('setUp, testMethod, tearDown' === this.test.log);
  }
}

const testSetUp = new TestCaseTest('testTemplateMethod').run();
