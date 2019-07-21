import { Money } from '~/app/money';

describe('Money', () => {
  test('equality different currencies', () => {
    const dollar = Money.dollar(5);
    const franc = Money.franc(5);

    expect(dollar.equals(franc)).toBeFalsy();
  });

  test('equality one currencies', () => {
    const dollar1 = Money.dollar(5);
    const dollar2 = Money.dollar(5);

    expect(dollar1.equals(dollar2)).toBeTruthy();
  });

  test('dollar multiplication', () => {
    const five = Money.dollar(5);

    expect(Money.dollar(10)).toEqual(five.times(2));

    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  test('franck multiplication', () => {
    const five = Money.franc(5);

    expect(Money.franc(10)).toEqual(five.times(2));

    expect(Money.franc(15)).toEqual(five.times(3));
  });

  test('dollar currency', () => {
    const dollar = Money.dollar(5);

    expect(dollar.currency).toBe('USD');
  });

  test('franc currency', () => {
    const franc = Money.franc(5);

    expect(franc.currency).toBe('CHF');
  });
});
