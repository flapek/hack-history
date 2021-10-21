type Path = "/" | "/information" | '/atbash' | '/scytale' | "/caesar" | '/vigenere' | '/jefferson' | '/charlesBabbage' | '/vernam' ;

type Route = {
  title: string;
  path: Path;
  exact: boolean;
  componnent: () => JSX.Element;
};

export type { Path, Route };
