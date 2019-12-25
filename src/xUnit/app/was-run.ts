import { TestCase } from './test-case';

export class WasRun extends TestCase {
  wasRun: boolean | undefined;
  wasSetUp: boolean | undefined;

  setUp() {
    this.wasRun = false;
    this.wasSetUp = true;
  }
}
