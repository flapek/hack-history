import { ALPHABET } from '../../const';
import { Cipher, CipherType, ICipher } from '../../types';

function shift(n: number) {
  return ALPHABET.split('')
    .map((_, idx) => ALPHABET[(idx + n) % ALPHABET.length])
    .join('');
}

function encrypt(input: string, shiftLevel: number): string {
  const newAlphabet = shift(shiftLevel);
  return input
    .split('')
    .map((value) => newAlphabet[ALPHABET.indexOf(value)])
    .join('');
}

function decrypt(input: string, shiftLevel: number): string {
  const newAlphabet = shift(shiftLevel);
  return input
    .split('')
    .map((value) => ALPHABET[newAlphabet.indexOf(value)])
    .join('');
}

const ceasar: ICipher<CipherType.CEASAR> = {
  encrypt: function (arg: Cipher<CipherType.CEASAR>): string {
    return encrypt(arg.input, arg.shift);
  },
  decrypt: function (arg: Cipher<CipherType.CEASAR>): string {
    return decrypt(arg.input, arg.shift);
  },
};

export default ceasar;
