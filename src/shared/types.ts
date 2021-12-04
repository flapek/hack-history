type Color =
  | 'inherit'
  | 'grey'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

enum CipherType {
  ATBASH = 'ATBASH',
  SCYTALE = 'SCYTALE',
  CEASAR = 'CEASAR',
  VIGENERE = 'VIGENERE',
  JEFFERSON = 'JEFFERSON',
  VERNAM = 'VERNAM',
}
interface Translation {
  readonly history: string;
}

interface Hint {
  description: string;
}

type BaseCipher = { input: string };

type CipherWithKey = BaseCipher & {
  key: string;
};

type CipherWithKeyAndPassword = CipherWithKey & {
  password: string;
};

type CipherWithShift = BaseCipher & {
  shift: number;
};

type Cipher<Type> = Type extends CipherType.ATBASH | CipherType.SCYTALE | CipherType.JEFFERSON
  ? BaseCipher
  : Type extends CipherType.CEASAR
  ? CipherWithShift
  : Type extends CipherType.VIGENERE
  ? CipherWithKeyAndPassword
  : CipherWithKey;

interface ICipher<T extends CipherType> {
  encrypt(arg: Cipher<T>): string;
  decrypt(arg: Cipher<T>): string;
}

export type {
  Color,
  Cipher,
  Translation,
  Hint,
  ICipher,
  BaseCipher,
  CipherWithKey,
  CipherWithShift,
};
export { CipherType };
