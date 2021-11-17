import { atbash, ceasar, scytale } from '..';
import { Cipher as CipherType } from '../../types';

export default class Cipher {
  static encrypt(cipher: CipherType, input: string): string {
    switch (cipher) {
      case 'ATBASH':
        return atbash.encrypt(input);
      case 'SCYTALE':
        return scytale.encrypt(input);
      case 'CEASAR':
        return ceasar.encrypt(input);
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
        return atbash.decrypt(input);
      case 'SCYTALE':
        return scytale.decrypt(input);
      case 'CEASAR':
        return ceasar.decrypt(input);
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
