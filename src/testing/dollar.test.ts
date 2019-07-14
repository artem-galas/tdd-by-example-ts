import { Dollar } from '~/app/dollar';

describe('Dollar', () => {
  test('should return multiplication', () => {
    const five = new Dollar(5);
    five.times(2);
    expect(10).toBe(five.amount);
  });
});
