import getRandomIntInclusive from "./getRandomIntInclusive";
import { Color } from "../types";

function randomColor(): Color {
  const rnd = getRandomIntInclusive(0, 6);

  return rnd === 0
    ? "grey"
    : rnd === 1
    ? "primary"
    : rnd === 2
    ? "secondary"
    : rnd === 3
    ? "error"
    : rnd === 4
    ? "info"
    : rnd === 5
    ? "success"
    : "warning";
}

export default randomColor;
