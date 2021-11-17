import { ICipher } from '../../types';

const column = 5;

const encrypt = (text: string): string => {
  let token = text.split('');
  let rows = token.length / column;
  let result = '';

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < rows; j++) {
      if (j * column + i < token.length) {
        result = result + token[j * column + i];
      } else {
        result = result + '*';
      }
    }
  }
  return result;
};

const decrypt = (text: string): string => {
  let token = text.split('');
  let rows = token.length / column;
  let result = '';

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < column; i++) {
      if (j * column + i < token.length) {
        result = result + token[i * rows + j];
      } else {
        result = result + '*';
      }
    }
  }

  return result;
};

const scytale: ICipher = {
  encrypt: function (input: string): string {
    return encrypt(input);
  },
  decrypt: function (input: string): string {
    return decrypt(input);
  },
};

export default scytale;
