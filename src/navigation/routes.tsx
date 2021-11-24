import { Route } from './types';
import { Game, Home } from '../screens';
import { translation as scytaleTranslation } from '../features/scytale';
import { getHints as getScytaleHints } from '../features/scytale/scytaleSlice';
import { translation as atbashTranslation } from '../features/atbash';
import { getHints as getAtbashHints } from '../features/atbash/atbashSlice';
import { translation as caesarTranslation } from '../features/caesar';
import { getHints as getCaesarHints } from '../features/caesar/caesarSlice';
import { translation as vigenereTranslation } from '../features/vigenere';
import { getHints as getVigenereHints } from '../features/vigenere/vigenereSlice';
import { translation as jeffersonTranslation } from '../features/vigenere';
import { getHints as getJeffersonHints } from '../features/vigenere/vigenereSlice';
import { translation as vernamTranslation } from '../features/vernam';
import { getHints as getVernamHints } from '../features/vernam/vernamSlice';
import { BaseGameScreen } from '../shared/components';
import { CipherType } from '../shared/types';

const routes: Route[] = [
  {
    title: 'home',
    path: '/',
    exact: true,
    componnent: Home,
  },
  {
    title: 'timeline',
    path: '/timeline',
    exact: false,
    componnent: Game,
  },
  {
    title: 'atbash',
    path: '/atbash',
    exact: false,
    componnent: () => (
      <BaseGameScreen
        cipherType={CipherType.ATBASH}
        history={atbashTranslation.history}
        getHints={getAtbashHints}
      />
    ),
  },
  {
    title: 'scytale',
    path: '/scytale',
    exact: false,
    componnent: () => (
      <BaseGameScreen
        cipherType={CipherType.SCYTALE}
        history={scytaleTranslation.history}
        getHints={getScytaleHints}
      />
    ),
  },
  {
    title: 'caesar',
    path: '/caesar',
    exact: false,
    componnent: () => (
      <BaseGameScreen
        cipherType={CipherType.CEASAR}
        history={caesarTranslation.history}
        getHints={getCaesarHints}
      />
    ),
  },
  {
    title: 'vigenere',
    path: '/vigenere',
    exact: false,
    componnent: () => (
      <BaseGameScreen
        cipherType={CipherType.VIGENERE}
        history={vigenereTranslation.history}
        getHints={getVigenereHints}
      />
    ),
  },
  {
    title: 'jefferson',
    path: '/jefferson',
    exact: false,
    componnent: () => (
      <BaseGameScreen
        cipherType={CipherType.JEFFERSON}
        history={jeffersonTranslation.history}
        getHints={getJeffersonHints}
      />
    ),
  },
  {
    title: 'vernam',
    path: '/vernam',
    exact: false,
    componnent: () => (
      <BaseGameScreen
        cipherType={CipherType.VERNAM}
        history={vernamTranslation.history}
        getHints={getVernamHints}
      />
    ),
  },
];

export default routes;
