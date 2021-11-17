import { lenghtNotEqual } from '.';

// @ponicode
describe('lenghtNotEqual', () => {
  test('Check empty arrays', () => {
    let result: boolean = lenghtNotEqual({ first: [], second: [] });
    expect(result).toBe(false);
  });

  test('Check arrays with difrent lenght', () => {
    let result: boolean = lenghtNotEqual({
      first: [224, 196, 202, 252, 142],
      second: [159, 241, 241, 127],
    });
    expect(result).toBe(true);
  });

  test('Check arrays with the same lenght', () => {
    let result: boolean = lenghtNotEqual({ first: [161], second: [127] });
    expect(result).toBe(false);
  });
});
