import { ALPHABET_FIRST_HALf, ALPHABET_SECOND_HALf } from '../../const';
import { Cipher, CipherType, ICipher } from '../../types';

function encryptAndDecrypt(input: string): string {
  let output = '';
  const alphabetFirstHalf = ALPHABET_FIRST_HALf.split('');
  const alphabetSecondHalf = ALPHABET_SECOND_HALf.split('').reverse();
  for (let char of input) {
    if (alphabetFirstHalf.includes(char))
      output += alphabetSecondHalf[alphabetFirstHalf.indexOf(char)];
    else output += alphabetFirstHalf[alphabetSecondHalf.indexOf(char)];
  }

  return output;
}

const jefferson: ICipher<CipherType.JEFFERSON> = {
  encrypt: function (arg: Cipher<CipherType.JEFFERSON>): string {
    return encryptAndDecrypt(arg.input);
  },
  decrypt: function (arg: Cipher<CipherType.JEFFERSON>): string {
    return encryptAndDecrypt(arg.input);
  },
};

export default jefferson;
