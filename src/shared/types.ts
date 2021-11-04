type Color =
  | 'inherit'
  | 'grey'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

type Cipher = 'ATBASH';

interface Translation {
  readonly history: string;
  readonly hints: string[];
}

interface Hint {
  description: string;
}

export type { Color, Cipher, Translation, Hint };
