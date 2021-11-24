import { vernam } from '..';

// @ponicode
describe('vigenere', () => {
  test('Check if string "hello" encrypted in corret way', () => {
    let result: string = vernam.encrypt({ input: 'hello', key: 'xmckl' });
    expect(result).toBe('eqnvz');
  });

  test('Check if string "superx" encrypted in corret way', () => {
    let result: string = vernam.encrypt({ input: 'superx', key: 'secret' });
    expect(result).toBe('kyrvvq');
  });

  test('Check if empty string encrypted in corret way', () => {
    let result: string = vernam.encrypt({ input: '', key: '' });
    expect(result).toBe('');
  });

  test('Check if string "eqnvz" decrypted in corret way', () => {
    let result: string = vernam.decrypt({ input: 'eqnvz', key: 'xmckl' });
    expect(result).toBe('hello');
  });

  test('Check if string "kyrvvq" decrypted in corret way', () => {
    let result: string = vernam.decrypt({ input: 'kyrvvq', key: 'secret' });
    expect(result).toBe('superx');
  });

  test('Check if empty string decrypted in corret way', () => {
    let result: string = vernam.decrypt({ input: '', key: '' });
    expect(result).toBe('');
  });
});
