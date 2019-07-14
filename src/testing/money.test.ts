import { Dollar } from '~/app/dollar';
import { Franc } from '~/app/franc';

describe('Money', () => {
  test('equality different currencies', () => {
    const dollar = new Dollar(5);
    const franc = new Franc(5);
    expect(dollar.equals(franc)).toBeFalsy();
  });
});
