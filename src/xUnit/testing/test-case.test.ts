import { TestCase } from '~/xUnit/app/test-case';
import { WasRun } from '~/xUnit/app/was-run';

class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun('testMethod');
    console.assert(!test.wasRun);
    test.run();
    console.assert(test.wasRun);
  }
}

const testCaseTest = new TestCaseTest('testRunning').run();
