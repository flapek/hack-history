export default function isLink(input: string): boolean {
  return /https?:\/\/.*/gm.test(input);
}
