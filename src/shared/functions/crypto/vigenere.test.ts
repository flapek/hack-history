import { vigenere } from '..';

// @ponicode
describe('vigenere', () => {
  test('Check if string "aaa" encrypted in corret way without key and "secret" password', () => {
    let result: string = vigenere.encrypt({ input: 'aaa', key: '', password: 'secret' });
    expect(result).toBe('sec');
  });

  test('Check if string "alex" encrypted in corret way without key and "secret" password', () => {
    let result: string = vigenere.encrypt({ input: 'alex', key: '', password: 'secret' });
    expect(result).toBe('spgo');
  });

  test('Check if empty string encrypted in corret way without key and without password', () => {
    let result: string = vigenere.encrypt({ input: '', key: '', password: '' });
    expect(result).toBe('');
  });

  test('Check if string "sec" decrypted in corret way without key and "secret" password', () => {
    let result: string = vigenere.decrypt({ input: 'sec', key: '', password: 'secret' });
    expect(result).toBe('aaa');
  });

  test('Check if string "spgo" decrypted in corret way without key and "secret" password', () => {
    let result: string = vigenere.decrypt({ input: 'spgo', key: '', password: 'secret' });
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way without key and without password', () => {
    let result: string = vigenere.decrypt({ input: '', key: '', password: 'secret' });
    expect(result).toBe('');
  });

  test('Check if string "aaa" encrypted in corret way with "super" key and "secret" password', () => {
    let result: string = vigenere.encrypt({ input: 'aaa', key: 'super', password: 'secret' });
    expect(result).toBe('adi');
  });

  test('Check if string "alex" encrypted in corret way with "super" key and "secret" password', () => {
    let result: string = vigenere.encrypt({ input: 'alex', key: 'super', password: 'secret' });
    expect(result).toBe('aogu');
  });

  test('Check if empty string encrypted in corret way with "super" key and without password', () => {
    let result: string = vigenere.encrypt({ input: '', key: 'super', password: '' });
    expect(result).toBe('');
  });

  test('Check if string "adi" decrypted in corret way with "super" key and "secret" password', () => {
    let result: string = vigenere.decrypt({ input: 'adi', key: 'super', password: 'secret' });
    expect(result).toBe('aaa');
  });

  test('Check if string "aogu" decrypted in corret way with "super" key and "secret" password', () => {
    let result: string = vigenere.decrypt({ input: 'aogu', key: 'super', password: 'secret' });
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way with "super" key and without password', () => {
    let result: string = vigenere.decrypt({ input: '', key: 'super', password: '' });
    expect(result).toBe('');
  });
});
