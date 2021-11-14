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

export type { Color, Cipher, Translation, Hint };
