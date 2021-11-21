import { atbash } from '..';

// @ponicode
describe('atbash', () => {
  test('Check if string "aaa" encrypted in corret way', () => {
    let result: string = atbash.encrypt({ input: 'aaa' });
    expect(result).toBe('zzz');
  });

  test('Check if string "alex" encrypted in corret way', () => {
    let result: string = atbash.encrypt({ input: 'alex' });
    expect(result).toBe('zovc');
  });

  test('Check if empty string encrypted in corret way', () => {
    let result: string = atbash.encrypt({ input: '' });
    expect(result).toBe('');
  });

  test('Check if string "zzz" decrypted in corret way', () => {
    let result: string = atbash.encrypt({ input: 'zzz' });
    expect(result).toBe('aaa');
  });

  test('Check if string "zovc" decrypted in corret way', () => {
    let result: string = atbash.encrypt({ input: 'zovc' });
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way', () => {
    let result: string = atbash.encrypt({ input: '' });
    expect(result).toBe('');
  });
});
