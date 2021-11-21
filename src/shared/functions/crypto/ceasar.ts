import { ALPHABET } from '../../const';
import { ICipher } from '../../types';

let shiftLevel = 10;

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

const ceasar: ICipher = {
  encrypt: function (input: string): string {
    return encrypt(input, shiftLevel);
  },
  decrypt: function (input: string): string {
    return decrypt(input, shiftLevel);
  },
};

export default ceasar;
