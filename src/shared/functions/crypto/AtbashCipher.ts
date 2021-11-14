export default function encryptAndDecryptAtbash(input: string): string {
  let output = '';
  let alphabet = createAlphabet();
  for (let char of input) {
    if (char in alphabet) output += alphabet[char];
    else output += char;
  }

  return output;
}

function chr(x: number) {
  return String.fromCharCode(x);
}

function createAlphabet(): {} {
  let alphabet = {};

  for (let i = 0; i < 26; i++) {
    alphabet[chr(65 + i)] = chr(90 - i);
    alphabet[chr(97 + i)] = chr(122 - i);
  }
  return alphabet;
}
