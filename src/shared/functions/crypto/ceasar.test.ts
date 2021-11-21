import { ceasar } from '..';

// @ponicode
describe('ceasar', () => {
  test('Check if string "aaa" encrypted in corret way with shift 10', () => {
    let result: string = ceasar.encrypt({ input: 'aaa', shift: 10 });
    expect(result).toBe('kkk');
  });

  test('Check if string "alex" encrypted in corret way with shift 10', () => {
    let result: string = ceasar.encrypt({ input: 'alex', shift: 10 });
    expect(result).toBe('kvoh');
  });

  test('Check if empty string encrypted in corret way with shift 10', () => {
    let result: string = ceasar.encrypt({ input: '', shift: 10 });
    expect(result).toBe('');
  });

  test('Check if string "kkk" decrypted in corret way with shift 10', () => {
    let result: string = ceasar.decrypt({ input: 'kkk', shift: 10 });
    expect(result).toBe('aaa');
  });

  test('Check if string "kvoh" decrypted in corret way with shift 10', () => {
    let result: string = ceasar.decrypt({ input: 'kvoh', shift: 10 });
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way with shift 10', () => {
    let result: string = ceasar.decrypt({ input: '', shift: 10 });
    expect(result).toBe('');
  });

  test('Check if string "aaa" encrypted in corret way with shift 20', () => {
    let result: string = ceasar.encrypt({ input: 'aaa', shift: 20 });
    expect(result).toBe('uuu');
  });

  test('Check if string "alex" encrypted in corret way with shift 20', () => {
    let result: string = ceasar.encrypt({ input: 'alex', shift: 20 });
    expect(result).toBe('ufyr');
  });

  test('Check if empty string encrypted in corret way with shift 20', () => {
    let result: string = ceasar.encrypt({ input: '', shift: 20 });
    expect(result).toBe('');
  });

  test('Check if string "uuu" decrypted in corret way with shift 20', () => {
    let result: string = ceasar.decrypt({ input: 'uuu', shift: 20 });
    expect(result).toBe('aaa');
  });

  test('Check if string "ufyr" decrypted in corret way with shift 20', () => {
    let result: string = ceasar.decrypt({ input: 'ufyr', shift: 20 });
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way with shift 20', () => {
    let result: string = ceasar.decrypt({ input: '', shift: 20 });
    expect(result).toBe('');
  });

  test('Check if string "aaa" encrypted in corret way with shift 30', () => {
    let result: string = ceasar.encrypt({ input: 'aaa', shift: 30 });
    expect(result).toBe('eee');
  });

  test('Check if string "alex" encrypted in corret way with shift 30', () => {
    let result: string = ceasar.encrypt({ input: 'alex', shift: 30 });
    expect(result).toBe('epib');
  });

  test('Check if empty string encrypted in corret way with shift 30', () => {
    let result: string = ceasar.encrypt({ input: '', shift: 30 });
    expect(result).toBe('');
  });

  test('Check if string "eee" decrypted in corret way with shift 30', () => {
    let result: string = ceasar.decrypt({ input: 'eee', shift: 30 });
    expect(result).toBe('aaa');
  });

  test('Check if string "epib" decrypted in corret way with shift 30', () => {
    let result: string = ceasar.decrypt({ input: 'epib', shift: 30 });
    expect(result).toBe('alex');
  });

  test('Check if empty string decrypted in corret way with shift 30', () => {
    let result: string = ceasar.decrypt({ input: '', shift: 30 });
    expect(result).toBe('');
  });
});
