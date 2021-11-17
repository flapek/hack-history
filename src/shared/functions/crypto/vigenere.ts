import { lenghtNotEqual, stringToASCIICode } from '..';
import { ICipher } from '../../types';

function encrypt({ text, key }: { text: string; key: string }): string {
  let textList = stringToASCIICode(text);
  let keyList = stringToASCIICode(key);

  if (lenghtNotEqual({ first: textList, second: keyList }))
    keyList = alignmentList(keyList, textList.length);

  var table = makeTable();
  var keyChar = 0;
  var message: string[] = [];
  // while (message.length < text.length) {
  //   for (var i = 0; i < text.length; i++) {
  //     var row = table[0].indexOf(key[keyChar]);
  //     var col = table[0].indexOf(text[i]);
  //     message[message.length] = table[row][col];
  //     if (keyChar < key.length - 1) {
  //       keyChar++;
  //     } else {
  //       keyChar = 0;
  //     }
  //   }
  // }
  return intsToCharList(message).join('');
}
//miejsce urodzenia, pesel

function alignmentList(keyList: number[], length: number): number[] {
  const copy = [...keyList];
  let iterator = 0;
  do {
    keyList.push(copy[iterator]);
    if (++iterator === copy.length) iterator = 0;
  } while (keyList.length < length);

  return keyList;
}

function decrypt(text, key, cipher) {
  cipher = stringToASCIICode(cipher.value);
  key = stringToASCIICode(key.value);
  var table = makeTable();
  var keyChar = 0;
  var message: string[] = [];
  // while (message.length < cipher.length) {
  //   for (var i = 0; i < cipher.length; i++) {
  //     var row = table[0].indexOf(key[keyChar]);
  //     var col = table[row].indexOf(cipher[i]);
  //     message[message.length] = table[0][col];
  //     if (keyChar < key.length - 1) {
  //       keyChar++;
  //     } else {
  //       keyChar = 0;
  //     }
  //   }
  // }
  return intsToCharList(message).join('');
}

function makeTable() {
  var table: number[][] = [];
  const minASCII = 65;
  const maxASCII = 91;
  var i = 0;
  while (i + minASCII < maxASCII) {
    var line: number[] = [];
    for (var j = 0; j < maxASCII - minASCII; j++) {
      if (j + i + minASCII >= maxASCII) {
        line[line.length] = j + i - (maxASCII - minASCII) + minASCII;
      } else {
        line[line.length] = j + i + minASCII;
      }
    }
    table[table.length] = line;
    i++;
  }
  return table;
}



function intsToCharList(integers) {
  let ints: string[] = [];
  for (var i = 0; i < integers.length; i++) {
    ints[i] = String.fromCharCode(integers[i]);
  }
  return ints;
}

const vigenere: ICipher = {
  encrypt: function (input: string): string {
    return encrypt({ text: input, key: '' });
  },
  decrypt: function (input: string): string {
    return decrypt(input, '', '');
  },
};

export default vigenere;
