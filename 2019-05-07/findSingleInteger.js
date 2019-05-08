/*
Given a linked list, detect whether it contains a cycle.
Can be done in O(n) time and O(1) space.


{
  value: Int,
  next: LinkedList
}

1 -> 2 -> 3 ->|
     ^--------|
1. Write the "obvious" solution that is O(n) time and O(n) memory
1. Try to think about different ways to iterate through the list that might
   give you O(n) time and O(1) memory.
*/

/*

You have an array of integers all of which appear three times,
except one which only appears twice.

Find the one that appears twice.

a^a === 0
a^0 === a
0^a === a


(a ^ a) ^ a === _______

[a,a,a,b,b,b,c,c].reduce(xor) === _____

3*sum([a, b, c]) - sum([a,a,a,b,b,b,c,c]) === c

3*sum(unique(array)) - sum(array)

sum([a,a,a,b,b,b,c,c]) = a + a + a + b + b + b + c + c

[]

*/




// INTERVIEW HACK

/*
If you get a question about an array of numbers and searching for like...


the number that appears once, or twice, or the biggest, or the smallest

and they give you a bunch of convenient, and maybe-too-interestest facts
about the numbers

then...there's probably some numerical trick to get the answer in either
constant or linear time.

a ^ b === bit-wise XOR

(101010101 ^ 001010100) = 100000001

101010101
101010101
---------
000000000

  101010101
^ 000000000
-----------
  101010101

a ^ b === b ^ a


(a ^ b) ^ c === a ^ (b ^ c)
a ^ b === b ^ a



[1,2,3,4,1,2,3]

1. Commutative
2. Associative

1 + 2 + 3 + 4 + 1 + 2 + 3
1 + 1 + 2 + 2 + 3 + 3 + 4

(a - b) - c !=== a - (b - c)
a - b !=== b - a

(1 ^ 1) ^ (2 ^ 2) ^ (3 ^ 3) ..... ^ 4 === 4

const
*/


/*
[1,2,3,3,4,5,6]


Take the list of numbers from 1 to n.  All of those numbers appear once,
but one appears twice.  Find the one that appears twice.

arr = [1,3,2,3,4,5,6,7,8,9,10]

sum(arr) - sum(1 + 2 + ... + 10) === n

sum1 = sum([1,2,3,3,4,5,6,7,8,9,10]) - (9*10 / 2)
sum2 = sum([1,2,3,4,5,6,7,8,9,10])

1 + 2 + 3 + ... + n === n * (n + 1) / 2
1 + 2 + 3 + ... + (n - 1) + n

(n + 1) + (n + 1) + (n + 1) = (n + 1) * (n / 2)

sum1 - sum2 === 3

*/

/*
1. Ask yourself, would the probem be easier if the data were sorted?

Because sorting is worst case O(n*log(n)

*/

function count(array, num) {
  let count = 0;

  array.forEach((item) => {
    if (item === num) {
      count += 1;
    }
  });

  return count;
}

function findSingleInteger(array) {
  for(let num of array) {
    if (count(array, num) === 1) {
      return num;
    }
  }
}

function findSingleInteger(array) {
  const set = new Set();

  // O(n) in time and O(n) in memory
  for(let num of array) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.insert(num);
    }
  }

  return Array.from(set)[0];
}


const xor = (x, y) => x ^ y;
const findSingleInteger = array => array.reduce(xor);


/*
|||||||||||||||||||||||

 23 - two 10s, three 1s = 0*(10^2) + 2*(10^1) + 3*(10^0)
423 - two 10s, three 1s = 4*(10^2) + 2*10^1 + 3*(10^0)

23 = 2*(10^1) + 3*(10^0)
   = a*(2^4) + b*(2^3) + c*(2^1) + 1*(2^0)
   = a*16 + b*8 + c*4 + d*2 + e*1
   = 1*16 + 0*8 + 1*4 + 1*2 + 1*1
   = "10111" (binary)


*/

/*
Binary
1 ^ 1 -> 0
1 ^ 0 -> 1
0 ^ 1 -> 1
0 ^ 0 -> 0

(a || b) && !(a && b)
  10111
^ 10111
  -----

  10011
| 10101
  -----
  10111

*/
