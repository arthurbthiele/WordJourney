import { wordGraph } from "./graphEntries";
export const wordsAreConnected = (word1, word2) => {
  if (!word2 || typeof word2 != "string") {
    return false;
  }
  return wordGraph[word2].includes(word1);
};
