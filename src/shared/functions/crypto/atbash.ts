import { ALPHABET_FIRST_HALf, ALPHABET_SECOND_HALf } from '../../const';
import { ICipher } from '../../types';

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

const atbash: ICipher = {
  encrypt: function (input: string): string {
    return encryptAndDecrypt(input);
  },
  decrypt: function (input: string): string {
    return encryptAndDecrypt(input);
  },
};

export default atbash;
