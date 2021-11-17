import { atbash } from '..';

// @ponicode
describe('atbash', () => {
  test('Check if string "aaa" encrypted in corret way', () => {
    let result: string = atbash.encrypt('aaa');
    expect(result).toBe('zzz');
  });

  test('Check if string "alex" encrypted in corret way', () => {
    let result: string = atbash.encrypt('alex');
    expect(result).toBe('zovc');
  });

  test('Check if empty string encrypted in corret way', () => {
    let result: string = atbash.encrypt('');
    expect(result).toBe('');
  });

  test('Check if string "zzz" decrypted in corret way', () => {
    let result: string = atbash.encrypt('zzz');
    expect(result).toBe('aaa');
  });

  test('Check if string "zovc" decrypted in corret way', () => {
    let result: string = atbash.encrypt('zovc');
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way', () => {
    let result: string = atbash.encrypt('');
    expect(result).toBe('');
  });
});
