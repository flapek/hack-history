import { ceasar } from '..';

// @ponicode
describe('ceasar', () => {
  test('Check if string "aaa" encrypted in corret way', () => {
    let result: string = ceasar.encrypt('aaa');
    expect(result).toBe('kkk');
  });

  test('Check if string "alex" encrypted in corret way', () => {
    let result: string = ceasar.encrypt('alex');
    expect(result).toBe('kvoh');
  });

  test('Check if empty string encrypted in corret way', () => {
    let result: string = ceasar.encrypt('');
    expect(result).toBe('');
  });

  test('Check if string "kkk" decrypted in corret way', () => {
    let result: string = ceasar.decrypt('kkk');
    expect(result).toBe('aaa');
  });

  test('Check if string "kvoh" decrypted in corret way', () => {
    let result: string = ceasar.decrypt('kvoh');
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way', () => {
    let result: string = ceasar.decrypt('');
    expect(result).toBe('');
  });
});
