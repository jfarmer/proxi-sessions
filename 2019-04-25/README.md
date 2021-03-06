# Data Structures, Interviews, and Big-O

April 25, 2019

## Interview Tips

1. Know the worst-case run time of common operations on common data structures (Big-O)
1. Know how to express your plan quickly in English
1. Start with the brute-force solution (if it's obvious and not obviously terrible)
1. Develop a set of questions you can ask yourself to help you see the problem from another angle.
1. As non-native English speakers, know some common English words that come up in interviews, e.g., palindrome and anagram.
1. Identify a set of common techniques and a sense for when a problem calls for those techniques.
1. Practice!

## Resources

- https://teachyourselfcs.com/
- http://www.crackingthecodinginterview.com/ (if you just want to get good at interview questions)
- https://leetcode.com (for a bunch of interview-style questions)
- http://www.algorist.com/ (if you want to really learn algorithms / data structures)

### Questions to Ask

- Can I transform the input in a way that would make the problem easier?  For example...
  - Would the problem be easier if the data were sorted? (Worst case for sort is O(n log n))
- Can I use a map/hash to avoid recomputing intermediate results or storing things like counts, have I seen this before, etc.?
  - Typically, inserting, fetching, and deleting from a map are O(1)
- Is there something special about the data and can I take advantage of it? For example...
  - Is the data sorted?
  - Does the data consist of integers?
  - Does the data have a maximum size?

For example, given an 16-bit integer `n`, count how many bits in its binary representation are set to `1`.

Because we know the integers will never be larger than 16-bits, we can make an array containing one number per 16-bit integer.  The value at index `i` is the numbers of 1's in the binary representation of `i`.  We can generate this array once and define it statically in our program.

This is only 131 KB in memory.  We could now do a lookup for a 32-bit integer by using the above table to check the first 16-bits, shifting it over 16 bits, and then checking the second 16 bits.

## Questions

### Is Palindrome?

A word `S` is a palindrome if it is spelled the same backwards and forwards.  Examples include _civic_, _madam_, _kayak_, and _level_.

Write a function `isPalindrome` that returns `true` if the input word is a palindrome and `false` otherwise.

```javascript
function isPalindrome(word) {

}
```

### Is Any Permutation a Palindrome?

Write a function `isPalindromePermutation` that returns `true` if any permutation of the letters in the input words are a palindrome and `false` otherwise?


```javascript
function isPalindromePermutation(word) {

}
```

### Is Anagram?

A word `S` is an anagram of another word `T` if you can spell `S` by rearranging the letters of `T`.  Examples:

1. _cinema_ and _iceman_
1. _earth_ and _heart_
1. _evil_ and _live_

Write a function `isAnagram` that takes two words as input and returns `true` if they're anagrams (and `false` otherwise).

```javascript
function isAnagram(word1, word2) {

}
```


## Linked Lists

A linked list is a data structure consisting of a series of nodes. Each node contains a value and a reference to the next node in the list.  Like this:

```
[ value ]  |-> [ value ]  |-> [ value ]  |-> ...
[       ]  |   [       ]  |   [       ]  |
[ next  ] -|   [ next  ] -|   [ next  ] -|
```

Here's a basic linked list in JavaScript:

```javascript
class ListNode {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

// list looks like: [5] --> [10] --> [15]
const list = new ListNode(5, new ListNode(10, new ListNode(15)));
```

If you find the use of the `new` keyword annoying, you can create a helper function:

```javascript
const List = (value, next) => new ListNode(value, next);

const list = List(5, List(10, List(15)));
```

One nice side-effect of having a constructor for `ListNode` is that you can do things like the following:

```javascript

// Note: You have to use reduceRight here and not reduce. Why?
const arrayToList = array => array.reduceRight(List, null);

arrayToList([2,4,6]); // List(2, List(4, List(6, null)));
```

You should be comfortable with the basic operations on a linked list:

- Iterate over the list
- Prepend a new value
- Append a new value
- Delete a value at a given position
- Insert a value at a given position
