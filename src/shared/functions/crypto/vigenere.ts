import { lenghtNotEqual, stringToASCIICode } from '..';
import { ALPHABET } from '../../const';
import { Cipher, CipherType, ICipher } from '../../types';

function encrypt(arg: Cipher<CipherType.VIGENERE>): string {
  let input = stringToASCIICode(arg.input);
  let password = stringToASCIICode(arg.password);
  let key = stringToASCIICode(arg.key);

  if (lenghtNotEqual({ first: input, second: password }))
    password = alignmentList(password, input.length);

  var table = createTable(key);
  var a = input.map(
    (_, idx) => table[table[0].indexOf(password[idx])][table[0].indexOf(input[idx])],
  );
  return intsToCharList(a).join('');
}

function decrypt(arg: Cipher<CipherType.VIGENERE>) {
  let input = stringToASCIICode(arg.input);
  let password = stringToASCIICode(arg.password);
  let key = stringToASCIICode(arg.key);

  if (lenghtNotEqual({ first: input, second: password }))
    password = alignmentList(password, input.length);

  var table = createTable(key);
  return intsToCharList(
    input.map((_, idx) => {
      var row = table[0].indexOf(password[idx]);
      var col = table[row].indexOf(input[idx]);
      return table[0][col];
    }),
  ).join('');
}

function createTable(key: number[]) {
  const alphabetASCII = [...new Set([...key, ...stringToASCIICode(ALPHABET)])];
  return alphabetASCII.map((_, idx) => shift(alphabetASCII, idx));
}

function alignmentList(keyList: number[], length: number): number[] {
  const result: number[] = [];
  let iterator = 0;
  do {
    result.push(keyList[iterator]);
    if (++iterator === keyList.length) iterator = 0;
  } while (result.length < length);

  return result;
}

function shift(value: number[], shiftLevel: number) {
  return value.map((_, idx) => value[(idx + shiftLevel) % value.length]);
}

function intsToCharList(value: number[]) {
  return value.map((item) => String.fromCharCode(item));
}

const vigenere: ICipher<CipherType.VIGENERE> = {
  encrypt: function (arg: Cipher<CipherType.VIGENERE>): string {
    return encrypt(arg);
  },
  decrypt: function (arg: Cipher<CipherType.VIGENERE>): string {
    return decrypt(arg);
  },
};

export default vigenere;
