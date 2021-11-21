import { atbash, ceasar, scytale, vigenere } from '..';
import { CipherType } from '../../types';

export default class Cipher {
  static encrypt(cipher: CipherType, input: string): string {
    switch (cipher) {
      case 'ATBASH':
        return atbash.encrypt({ input: input });
      case 'SCYTALE':
        return scytale.encrypt({ input: input });
      case 'CEASAR':
        return ceasar.encrypt({ input: input, shift: 10 });
      case 'VIGENERE':
        return vigenere.encrypt({ input: input, key: '' });
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
        return atbash.decrypt({ input: input });
      case 'SCYTALE':
        return scytale.decrypt({ input: input });
      case 'CEASAR':
        return ceasar.decrypt({ input: input, shift: 10 });
      case 'VIGENERE':
        return vigenere.decrypt({ input: input, key: '' });
      case 'JEFFERSON':
        return 'not implemented yet';
      case 'VERNAM':
        return 'not implemented yet';
      default:
        return '';
    }
  }
}
