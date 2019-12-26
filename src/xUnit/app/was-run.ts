import { TestCase } from './test-case';

export class WasRun extends TestCase {
  get log() {
    return this._log.join(', ');
  }

  private _log: string[] = [];

  setUp() {
    this._log = [...this._log, 'setUp'];
  }

  testMethod() {
    this._log = [...this._log, 'testMethod'];
  }

  tearDown() {
    this._log = [...this._log, 'tearDown'];
  }
}
