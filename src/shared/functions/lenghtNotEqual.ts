export default function lenghtNotEqual({
  first,
  second,
}: {
  first: number[];
  second: number[];
}): boolean {
  return first.length !== second.length;
}
