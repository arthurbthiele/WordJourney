export const wordsAreConnected = (word1, word2) => {
  return (
    wordsAreConnectedByDeletion(word1, word2) ||
    wordsAreConnectedByChangingLetter(word1, word2)
  );
};

const wordsAreConnectedByDeletion = (word1, word2) => {
  if (Math.abs(word1.length - word2.length) !== 1) return false;
  const [shorter, longer] =
    word1.length > word2.length ? [word2, word1] : [word1, word2];
  let passedDeletionSite = false;
  for (let i = 0; i < shorter.length; i++) {
    let offset = passedDeletionSite ? 1 : 0;
    if (shorter[i] != longer[i + offset]) {
      if (!passedDeletionSite) {
        passedDeletionSite = true;
      } else {
        return false;
      }
    }
  }
  console.log("We think those were connected by deletion");
  return true;
};

const wordsAreConnectedByChangingLetter = (word1, word2) => {
  if (word1.length != word2.length) {
    return false;
  }
  let differences = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] != word2[i]) {
      differences += 1;
    }
  }
  if (differences == 1) {
    return true;
  }
  return false;
};
