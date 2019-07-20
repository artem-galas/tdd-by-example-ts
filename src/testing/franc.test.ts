import { Franc } from '~/app';

describe('Franc', () => {
  test('should return multiplication', () => {
    const five = new Franc(5);
    expect(new Franc(10)).toEqual(five.times(2));
    expect(new Franc(15)).toEqual(five.times(3));
  });

  test('equality', () => {
    const one = new Franc(5);
    const two = new Franc(5);
    expect(one.equals(two)).toBeTruthy();
  });
});
