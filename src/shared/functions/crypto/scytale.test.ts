import { scytale } from '..';

// @ponicode
describe('scytale', () => {
  test('Check if string "some secret text" is encrypted in corret way', () => {
    let result: string = scytale.encrypt('some secret text');
    expect(result).toBe('seto cemrxe etst');
  });

  test('Check if empty string is encrypted in corret way', () => {
    let result: string = scytale.encrypt('');
    expect(result).toBe('');
  });

  test('Check if string "seto cemrxe etst" is decrypted in corret way', () => {
    let result: string = scytale.decrypt('seto cemrxe etst');
    expect(result).toBe('some secret text');
  });

  test('Check if empty string is decrypted in corret way', () => {
    let result: string = scytale.decrypt('');
    expect(result).toBe('');
  });
});
