export function isValidISODateWithoutTime(str: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(str);
}

export function capitalize(str: string): string {
  let words = str.split(" ");
  let capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}
