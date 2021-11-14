import { encryptAndDecryptAtbash } from '..';
import { Cipher as CipherType } from '../../types';

export default class Cipher {
  static encrypt(cipher: CipherType, input: string): string {
    switch (cipher) {
      case 'ATBASH':
        return encryptAndDecryptAtbash(input);
      case 'SCYTALE':
        return 'not implemented yet';
      case 'CEASAR':
        return 'not implemented yet';
      case 'VIGENERE':
        return 'not implemented yet';
      case 'JEFFERSON':
        return 'not implemented yet';
      case 'VERNAM':
        return 'not implemented yet';
      default:
        return '';
    }
  }

  static decrypt(cipher: CipherType, input: string): string {
    switch (cipher) {
      case 'ATBASH':
        return encryptAndDecryptAtbash(input);
      case 'SCYTALE':
        return 'not implemented yet';
      case 'CEASAR':
        return 'not implemented yet';
      case 'VIGENERE':
        return 'not implemented yet';
      case 'JEFFERSON':
        return 'not implemented yet';
      case 'VERNAM':
        return 'not implemented yet';
      default:
        return '';
    }
  }
}
