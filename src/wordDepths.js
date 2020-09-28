import { wordGraph } from "./graphEntries";
import queue from "queue";

export const initialiseDepths = () => {
  let wordDepths = {};
  Object.keys(wordGraph).forEach((word) => {
    wordDepths[word] = Infinity;
  });
  return wordDepths;
};

export const updateDepths = (depths, currentGraphNodes) => {
  let nodesToVisit = queue();
  currentGraphNodes.forEach((node) => {
    const word = node.id;
    depths[word] = 0;
    nodesToVisit.push(word);
  });

  while (nodesToVisit.length > 0) {
    const currentWord = nodesToVisit.shift();
    const currentDepth = depths[currentWord];
    const adjacentWords = getAdjacentWords(currentWord);
    adjacentWords.forEach((word) => {
      if (depths[word] > currentDepth + 1) {
        depths[word] = currentDepth + 1;
        nodesToVisit.push(word);
      }
    });
  }
};

const getAdjacentWords = (currentWord) => {
  return wordGraph[currentWord];
};
