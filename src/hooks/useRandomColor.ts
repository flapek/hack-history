import { randomColor } from "../shared/functions";
import { Color } from "../shared/types";

export default function useRandomColor() {
  var lastColor: Color = "inherit";
  var actualColor: Color = "inherit";
  function generateNext(): Color {
    lastColor = actualColor;
    do {
      actualColor = randomColor();
    } while (lastColor === actualColor);
    return actualColor;
  }

  return {
    lastColor: lastColor,
    actualColor: actualColor,
    generateNext: generateNext,
  };
}
