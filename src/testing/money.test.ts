import { Dollar, Franc, Money } from '~/app/';

describe('Money', () => {
  test('equality different currencies', () => {
    const dollar = Money.dollar(5);
    const franc = Money.franc(5);
    expect(dollar.equals(franc)).toBeFalsy();
  });

  test('dollar multiplication', () => {
    const five = Money.dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });

  test('franck multiplication', () => {
    const five = Money.franc(5);
    expect(new Franc(10)).toEqual(five.times(2));
    expect(new Franc(15)).toEqual(five.times(3));
  });
});
