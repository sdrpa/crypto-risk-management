import { sma, normalize, average, std } from './lib';

test('sma', () => {
   const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   expect(sma(xs, 4)).toStrictEqual([NaN, NaN, NaN, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5]);
});

test('normalize', () => {
   const xs = [1, 2, 3, 4, 5];
   expect(normalize(10, 5, 15, 0, 1)).toBe(0.5);
});

test('average', () => {
   const xs = [1, 2, 3, 4, 5];
   expect(average(xs)).toBe(3);
});

test('standard deviation', () => {
   const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 25];
   expect(std(xs)).toBe(6.48074069840786);
});
