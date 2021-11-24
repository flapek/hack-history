import { ALPHABET } from '../../const';
import { Cipher, CipherType, ICipher } from '../../types';

function encrypt(input: string, key: string): string {
  if (input.length !== key.length) key = alignmentList(key, input.length);

  return input
    .split('')
    .map(
      (c: string, idx: number) =>
        ALPHABET[(ALPHABET.indexOf(c) + ALPHABET.indexOf(key[idx])) % ALPHABET.length],
    )
    .join('');
}

function decrypt(input: string, key: string): string {
  if (input.length !== key.length) key = alignmentList(key, input.length);

  return input
    .split('')
    .map((c: string, idx: number) => {
      let a = ALPHABET.indexOf(c) - ALPHABET.indexOf(key[idx]);
      if (a < 0) a += ALPHABET.length;
      return ALPHABET[a % ALPHABET.length];
    })
    .join('');
}

function alignmentList(key: string, length: number): string {
  let result: string = '';
  let iterator = 0;
  do {
    result += key[iterator];
    if (++iterator === key.length) iterator = 0;
  } while (result.length < length);

  return result;
}

const vernam: ICipher<CipherType.VERNAM> = {
  encrypt: function (arg: Cipher<CipherType.VERNAM>): string {
    return encrypt(arg.input, arg.key);
  },
  decrypt: function (arg: Cipher<CipherType.VERNAM>): string {
    return decrypt(arg.input, arg.key);
  },
};

export default vernam;
