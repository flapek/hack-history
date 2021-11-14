import { Timeline } from './types';

const timelines: Timeline[] = [
  {
    title: 'Atbash cipher',
    year: '500–600 BC',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/CipherDisk2000.jpg/800px-CipherDisk2000.jpg',
    alt: 'Atbash cipher',
    shortDescription:
      'The Atbash cipher is a particular type of monoalphabetic cipher formed by taking the alphabet (or abjad, syllabary, etc.) and mapping it to its reverse, so that the first letter becomes the last letter, the second letter becomes the second to last letter, and so on.',
    pathTo: '/atbash',
  },
  {
    title: 'Scytale',
    year: '486 BC',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Skytale.png/800px-Skytale.png',
    alt: 'Scytale',
    shortDescription:
      'Scytale is a tool used to perform a transposition cipher, consisting of a cylinder with a strip of parchment wound around it on which is written a message. The ancient Greeks, and the Spartans in particular, are said to have used this cipher to communicate during military campaigns. The recipient uses a rod of the same diameter on which the parchment is wrapped to read the message.',
    pathTo: '/scytale',
  },
  {
    title: 'Caesar cipher',
    year: '100-44 BC',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/2560px-Caesar_cipher_left_shift_of_3.svg.png',
    alt: 'Caesar cipher',
    shortDescription:
      "The Caesar cipher is named after Julius Caesar, who, according to Suetonius, used it with a shift of three (A becoming D when encrypting, and D becoming A when decrypting) to protect messages of military significance. While Caesar's was the first recorded use of this scheme, other substitution ciphers are known to have been used earlier.",
    pathTo: '/caesar',
  },
  {
    title: 'Vigenère cipher',
    year: '1553',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cryptographic_sliding_rule-IMG_0533.jpg/1280px-Cryptographic_sliding_rule-IMG_0533.jpg',
    alt: 'Vigenère cipher',
    shortDescription:
      'Vigenère cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a form of polyalphabetic substitution.',
    pathTo: '/vigenere',
  },
  {
    title: 'Jefferson disk / Wheel cypher',
    year: '1790s',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Jefferson%27s_disk_cipher.jpg',
    alt: 'Jefferson disk / Wheel cypher',
    shortDescription:
      'The Jefferson disk, or wheel cypher as Thomas Jefferson named it, also known as the Bazeries Cylinder, is a cipher system using a set of wheels or disks, each with the 26 letters of the alphabet arranged around their edge. The order of the letters is different for each disk and is usually scrambled in some random way. Each disk is marked with a unique number.',
    pathTo: '/jefferson',
  },
  {
    title: 'Vernam cipher',
    year: '1917',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/USpatent1310719.fig1.png',
    alt: 'Vernam cipher',
    shortDescription:
      'Gilbert Sandford Vernam was a Worcester Polytechnic Institute 1914 graduate and AT&T Bell Labs engineer who, in 1917, invented an additive polyalphabetic stream cipher and later co-invented an automated one-time pad cipher. Vernam proposed a teleprinter cipher in which a previously prepared key, kept on paper tape, is combined character by character with the plaintext message to produce the ciphertext.',
    pathTo: '/vernam',
  },
];

export default timelines;
