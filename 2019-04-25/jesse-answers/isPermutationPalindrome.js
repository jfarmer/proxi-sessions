/*
Brute force would be something like:
*/
function bruteIsPermutationPalindrome(word) {
  permutations(word).forEach((permutation) => {
    if (isPalindrome(permut)) {
      return true;
    }
  });

  return false;
}

function isPermutationPalindrome(word) {
  const counts = new Set();

  for (let char of word) {
    if (counts.has(char)) {
      counts.delete(char);
    } else {
      counts.add(char);
    }
  }

  return counts.size <= 1;
}

palindromes = ['madam', 'mdaam', 'racecar', 'cecraar', '', 'a', 'aa'];
palindromes.forEach((word) => {
  console.log(isPermutationPalindrome(word) === true);
});

notPalindromes = ['madam23', 'ad1aam3', 'rac1ecar3', 'cer32aar'];

notPalindromes.forEach((word) => {
  console.log(isPermutationPalindrome(word) === false);
});
