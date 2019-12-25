import { TestCase } from '~/xUnit/app/test-case';
import { WasRun } from '~/xUnit/app/was-run';

class TestCaseTest extends TestCase {
  test: WasRun | undefined;

  setUp() {
    this.test = new WasRun('testMethod');
  }

  testRunning() {
    this.test!.run();
    console.assert(this.test!.wasRun);
  }

  testSetUp() {
    this.test!.run();
    console.assert(this.test!.wasSetUp);
  }
}

const testCaseTest = new TestCaseTest('testRunning').run();
const testSetUp = new TestCaseTest('testSetUp').run();
