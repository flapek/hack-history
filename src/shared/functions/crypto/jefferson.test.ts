import { jefferson } from '..';

// @ponicode
describe('jefferson', () => {
  test('Check if string "some secret text" is encrypted in corret way', () => {
    let result: string = jefferson.encrypt({ input: 'some secret text' });
    expect(result).toBe('pujd qzvalm sgog');
  });

  test('Check if empty string is encrypted in corret way', () => {
    let result: string = jefferson.encrypt({ input: '' });
    expect(result).toBe('');
  });

  test('Check if string "pujd qzvalm sgog" is decrypted in corret way', () => {
    let result: string = jefferson.decrypt({ input: 'pujd qzvalm sgog' });
    expect(result).toBe('some secret text');
  });

  test('Check if empty string is decrypted in corret way', () => {
    let result: string = jefferson.decrypt({ input: '' });
    expect(result).toBe('');
  });
});
