export function splitTitle(
  title: string,
  splitTitleWords: boolean
): { firstWord: string; restWords: string } {
  const titleWords = splitTitleWords ? title.split(" ") : [title];
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(" ");

  return { firstWord, restWords };
}
