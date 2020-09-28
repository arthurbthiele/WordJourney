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
  let maxDepth = 0;
  let maxDepthWords = [];
  Object.keys(depths).forEach((word) => {
    if (depths[word] > maxDepth) {
      maxDepth = depths[word];
      maxDepthWords = [word];
    } else if (depths[word] == maxDepth) {
      maxDepthWords.push(word);
    }
  });
  console.log(maxDepth);
  console.log(maxDepthWords);
};

const getAdjacentWords = (currentWord) => {
  return wordGraph[currentWord];
};
