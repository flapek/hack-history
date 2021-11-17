import { ICipher } from '../../types';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newalpha = '';

function shift(n) {
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    newalpha += alphabet[offset];
  }
}

function encrypt(input: string): string {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += newalpha[alphabet.indexOf(input[i])];
  }
  return result;
}
function decrypt(input: string): string {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += alphabet[newalpha.indexOf(input[i])];
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
