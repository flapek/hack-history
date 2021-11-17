import { ALPHABET } from '../../const';
import { ICipher } from '../../types';

let newalpha = '';

function shift(n: number) {
  for (let i = 0; i < ALPHABET.length; i++) {
    let offset = (i + n) % ALPHABET.length;
    newalpha += ALPHABET[offset];
  }
}

function encrypt(input: string): string {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += newalpha[ALPHABET.indexOf(input[i])];
  }
  return result;
}
function decrypt(input: string): string {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += ALPHABET[newalpha.indexOf(input[i])];
  }
  return result;
}

const ceasar: ICipher = {
  encrypt: function (input: string): string {
    shift(10);
    return encrypt(input);
  },
  decrypt: function (input: string): string {
    shift(10);
    return decrypt(input);
  },
};

export default ceasar;
