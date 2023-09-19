export function formatPathname(path: string): string {
  // get the first index of the pathname
  const pathname = path.split("/")[1];
  return pathname;
}
