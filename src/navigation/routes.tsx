import { Route } from './types';
import { Atbash, Caesar, Jefferson, Scytale, Vigenere, Vernam, Game, Info, Home } from '../screens';

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
    title: 'information',
    path: '/information',
    exact: false,
    componnent: Info,
  },
  {
    title: 'atbash',
    path: '/atbash',
    exact: false,
    componnent: Atbash,
  },
  {
    title: 'scytale',
    path: '/scytale',
    exact: false,
    componnent: Scytale,
  },
  {
    title: 'caesar',
    path: '/caesar',
    exact: false,
    componnent: Caesar,
  },
  {
    title: 'vigenere',
    path: '/vigenere',
    exact: false,
    componnent: Vigenere,
  },
  {
    title: 'jefferson',
    path: '/jefferson',
    exact: false,
    componnent: Jefferson,
  },
  {
    title: 'vernam',
    path: '/vernam',
    exact: false,
    componnent: Vernam,
  },
];

export default routes;
