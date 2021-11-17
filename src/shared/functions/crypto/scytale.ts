import { ICipher } from '../../types';

const column = 5;

const encrypt = (text: string): string => {
  const wordsLenght = prepareWordsLenghts(text);
  const token = prepareToken(text);
  const rows = Math.ceil(token.length / column);
  let encryptedText = '';
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < rows; j++) {
      if (j * column + i < token.length) {
        encryptedText += token[j * column + i];
      }
    }
  }

  return splitText(encryptedText, wordsLenght).trim();
};

const decrypt = (text: string): string => {
  const wordsLenght = prepareWordsLenghts(text);
  const token = prepareToken(text);
  const rows = Math.ceil(token.length / column);
  let encryptedText = '';
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < column; i++) {
      if (j * column + i < token.length) {
        encryptedText += token[i * rows + j];
      }
    }
  }
  return splitText(encryptedText, wordsLenght).trim();
};

function prepareWordsLenghts(text: string) {
  return text.split(' ').map((word) => word.length);
}

function prepareToken(text: string) {
  return text
    .replace(' ', '')
    .split('')
    .filter((value) => value !== ' ');
}

function splitText(text: string, wordsLenght: number[]) {
  let result = '';
  let startIdx = 0;
  let endIdx = wordsLenght[0];
  for (let i = 0; i < wordsLenght.length; i++) {
    result += `${text.slice(startIdx, endIdx)}`;
    if (i === wordsLenght.length - 1) break;
    result += ` `;
    startIdx = endIdx;
    endIdx += wordsLenght[i + 1];
  }

  return result;
}

const scytale: ICipher = {
  encrypt: function (input: string): string {
    return encrypt(input);
  },
  decrypt: function (input: string): string {
    return decrypt(input);
  },
};

export default scytale;
