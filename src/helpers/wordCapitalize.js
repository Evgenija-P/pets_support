export default function wordCapitalize(word = '') {
  if (!word) {
    return word;
  }

  return word.charAt(0).toLocaleUpperCase() + word.slice(1);
}
