import { scytale } from '..';

// @ponicode
describe('scytale', () => {
  test('Check if string "some secret text" is encrypted in corret way', () => {
    let result: string = scytale.encrypt({ input: 'some secret text' });
    expect(result).toBe('seto cemrxe etst');
  });

  test('Check if empty string is encrypted in corret way', () => {
    let result: string = scytale.encrypt({ input: '' });
    expect(result).toBe('');
  });

  test('Check if string "seto cemrxe etst" is decrypted in corret way', () => {
    let result: string = scytale.decrypt({ input: 'seto cemrxe etst' });
    expect(result).toBe('some secret text');
  });

  test('Check if empty string is decrypted in corret way', () => {
    let result: string = scytale.decrypt({ input: '' });
    expect(result).toBe('');
  });
});
