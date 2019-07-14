import { Dollar } from '~/app/dollar';

describe('Dollar', () => {
  test('should return multiplication', () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(10).toBe(product.amount);
    product = five.times(3);
    expect(15).toBe(product.amount);
  });

  test('equality', () => {
    const one = new Dollar(5);
    const two = new Dollar(5);
    expect(one.equals(two)).toBeTruthy();
  });
});
