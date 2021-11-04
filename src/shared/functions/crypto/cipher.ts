import { encryptAndDecrypt } from '..';
import { Cipher as CipherType } from '../../types';

export default class Cipher {
  static encrypt(cipher: CipherType, input: string): string {
    switch (cipher) {
      case 'ATBASH':
        return encryptAndDecrypt(input);
      default:
        return '';
    }
  }

  static decrypt(cipher: CipherType, input: string): string {
    switch (cipher) {
      case 'ATBASH':
        return encryptAndDecrypt(input);
      default:
        return '';
    }
  }
}
