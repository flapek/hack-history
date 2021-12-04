import { Cipher, CipherType, ICipher } from '../../types';

const ALPHABET = [
  'abceigdjfvuymhtqkzolrxspwn',
  'acdehfijktlmouvygznpqxrwsb',
  'adkomjubgephsczinxfyqrtvwl',
  'aedcbifgjhlkmruoqvptnwyxzs',
  'afnqukdopitjbrhcyslwemzvxg',
  'agpocixlurndyzhwbjsqfkvmet',
  'ahxjezbnikpvrogsydulcfmqtw',
  'aihpjobwkcvfzlqerynsumgtdx',
  'ajdskqoivtzefhgyunlpmbxwcr',
  'akelbdfjghonmtprqsvzuxywic',
  'altmsxvqpnohuwdizycgkrfbej',
  'amnflhqgcujtbypzkxisrdvewo',
  'ancjildhbmkgxuztswqyvorpfe',
  'aodwpkjviuqhzctxblegnyrsmf',
  'apbvhiyksguentcxowfqdrljzm',
  'aqjnubtgimwzrvlxcshdeokfpy',
  'armyoftheuszjxdpcwgqibklnv',
  'asdmcneqbozplgvjrkytfuiwxh',
  'atojylfxngwhvcmirbsekupdzq',
  'autrzxqlyiovbpesnhjwmdgfck',
  'avnkhrgoxeybfsjmudqclzwtip',
  'awvsfdliebhknrjqzgmxpucoty',
  'axkwrevdtufoyhmlsiqnjcpgbz',
  'ayjpxmvkbqwuglostechnzfrid',
  'azdnbuhyfwjlvgrcqmpsoextki',
];

function encrypt(input: string): string {
  return input
    .split('')
    .map((i, idx) => {
      if (i === ' ') return i;
      const index = idx % ALPHABET.length;
      return ALPHABET[index][(ALPHABET[index].indexOf(i) + 1) % ALPHABET[index].length];
    })
    .join('');
}

function decrypt(input: string): string {
  return input
    .split('')
    .map((i, idx) => {
      if (i === ' ') return i;
      const index = idx % ALPHABET.length;
      let letterIdx = ALPHABET[index].indexOf(i) - 1;
      letterIdx = letterIdx === -1 ? ALPHABET[index].length - 1 : letterIdx;
      return ALPHABET[index][letterIdx];
    })
    .join('');
}

const jefferson: ICipher<CipherType.JEFFERSON> = {
  encrypt: function (arg: Cipher<CipherType.JEFFERSON>): string {
    return encrypt(arg.input);
  },
  decrypt: function (arg: Cipher<CipherType.JEFFERSON>): string {
    return decrypt(arg.input);
  },
};

export default jefferson;
