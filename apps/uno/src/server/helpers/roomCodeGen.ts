export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const fourRandomLetters = () => {
  let randomLetters = "";
  for (let i = 0; i < 4; i++) {
    randomLetters += LETTERS[Math.floor(Math.random() * LETTERS.length)];
  }
  return randomLetters;
};
