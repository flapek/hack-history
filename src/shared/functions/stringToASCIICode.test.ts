import { stringToASCIICode } from '.';

// @ponicode
describe('stringToASCIICode', () => {
  test('Check empty arrays', () => {
    let result: number[] = stringToASCIICode('');
    expect(result).toStrictEqual([]);
  });

  test('Check arrays with difrent lenght', () => {
    let result: number[] = stringToASCIICode('');
    expect(result).toStrictEqual([]);
  });

  test('Check arrays with the same lenght', () => {
    let result: number[] = stringToASCIICode('');
    expect(result).toStrictEqual([]);
  });
});
