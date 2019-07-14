import { Dollar } from '~/app/dollar';

describe('Dollar', () => {
  test('should return multiplication', () => {
    const five = new Dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });

  test('equality', () => {
    const one = new Dollar(5);
    const two = new Dollar(5);
    expect(one.equals(two)).toBeTruthy();
  });
});
