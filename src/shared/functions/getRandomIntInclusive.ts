function getRandomIntInclusive(min: number, max: number): number {
  if (min > max) throw new Error("Min value is higher then max!");
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomIntInclusive;
