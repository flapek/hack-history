type Color =
  | 'inherit'
  | 'grey'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

type Cipher = 'ATBASH' | 'SCYTALE' | 'CEASAR' | 'VIGENERE' | 'JEFFERSON' | 'VERNAM';

interface Translation {
  readonly history: string;
}

interface Hint {
  description: string;
}

interface ICipher {
  encrypt(input: string): string;
  decrypt(input: string): string;
}

export type { Color, Cipher, Translation, Hint, ICipher };
