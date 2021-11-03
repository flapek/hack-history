import { encryptAndDecrypt } from '../functions';
import { Cipher } from '../types';

declare global {
  interface String {
    encrypt(cipher: Cipher): string;
    decrypt(cipher: Cipher): string;
  }
}

/*eslint no-extend-native: "off"*/
String.prototype.encrypt = function (cipher: Cipher): string {
  let d = String(this);
  switch (cipher) {
    case 'ATBASH':
      return encryptAndDecrypt(d);
    default:
      return '';
  }
};

/*eslint no-extend-native: "off"*/
String.prototype.decrypt = function (cipher: Cipher): string {
  let d = String(this);

  switch (cipher) {
    case 'ATBASH':
      return encryptAndDecrypt(d);
    default:
      return '';
  }
};

export {};
