function isPalindrome(word) {
  const len = word.length;

  for(let i = 0; i < len; i++) {
    if (word[i] !== word[len - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('jesse') === false);
console.log(isPalindrome('a') === true);
console.log(isPalindrome('aa') === true);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('racecars') === false);
