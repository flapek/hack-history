import { Route } from "./types";
import {
  Atbash,
  Caesar,
  CharlesBabbage,
  Jefferson,
  Scytale,
  Vigenere,
  Vernam,
  Game,
  Info,
} from "../screens";

const routes: Route[] = [
  {
    title: "home",
    path: "/",
    exact: true,
    componnent: Game,
  },
  {
    title: "information",
    path: "/information",
    exact: false,
    componnent: Info,
  },
  {
    title: "atbash",
    path: "/atbash",
    exact: false,
    componnent: Atbash,
  },
  {
    title: "scytale",
    path: "/scytale",
    exact: false,
    componnent: Scytale,
  },
  {
    title: "caesar",
    path: "/caesar",
    exact: false,
    componnent: Caesar,
  },
  {
    title: "vigenere",
    path: "/vigenere",
    exact: false,
    componnent: Vigenere,
  },
  {
    title: "jefferson",
    path: "/jefferson",
    exact: false,
    componnent: Jefferson,
  },
  {
    title: "charlesBabbage",
    path: "/charlesBabbage",
    exact: false,
    componnent: CharlesBabbage,
  },
  {
    title: "vernam",
    path: "/vernam",
    exact: false,
    componnent: Vernam,
  },
];

export default routes;
