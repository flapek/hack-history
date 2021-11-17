export default function stringToASCIICode(input: string) {
  let result: number[] = [];
  for (var i = 0; i < input.length; i++) {
    result[i] = input.charCodeAt(i);
  }
  return result;
}
