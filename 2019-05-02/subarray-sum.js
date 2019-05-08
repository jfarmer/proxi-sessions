/*
Let's say we have line of N spaces.  We play a game at any given moment we can
take 1, 2, or 3 steps forward.

How many ways are there for us to get to the end of the line?

                321 ^
------------------- -

numPath(0) = 0;
numPath(1) = 1;
numPath(2) = 2;

function numPaths(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  return numPaths(n - 1) + numPaths(n - 2) + numPaths(n - 3);
}

 If I know f(0), f(1), ..., f(n-1), can I calculate f(n)?
*/


/*

Terminology: a subarray is a contiguous part of an array

[3, 4, 7, 8, 24]

[4,7,8]
[3]
[3,4]
[3, 4, 7, 8, 24]

Given an array of numbers, find the subarray with the largest sum.

Example inputs:

- [1, 4, 7, -3, 10, 4, -100, 6]

Brute force:

max(map(sum, subarrays(array)))

[a, b, c, d]
[   ]
    [  ]
       [  ]

- How many subarrays of size 1? (The number of elements)
- How many subarrays of size 2? (n - 1)
- How many subarrays of size 3?
- ...
- How many subarrays of size (n - 1)?     2
- How many subarrays of size n?           1

1 + 2 + 3 + ... + (n - 1) + n
   = (n*(n + 1))/2 = (n^2 + n) / 2 = O(n^2)
*/

/*
[a, b, c, x]

What if I had a function maxSumWithEndpoint(arr, i) where

maxSumWithEndpoint(arr, i) was the largest sum of a subarray whose
right end-point is at index i?

maxSumWithEndPoint(arr, 2)

[a,b,c]
  [b,c]
    [c]

subProblem = maxSumWithEndPoint(arr, i - 1)

maxSumWithEndPoint(arr, i)
  = Math.max(
    arr[i],
    maxSumWithEndPoint(arr, i - 1) + arr[i]
  );

[1, 3, -2, 4, -7]

[1]      : 1
[1,3]    : 4
[1,3,-2] : 2
[1,3,-2,4] : 6
[1, 3, -2, 4, -7] : -1



[1,3,-2]
 [3, -2]
   [ -2]




[a,b,c,d]

a
b
c
d

[a]
[a,b]
[a,b,c]
[a,b,c,d]

      [d]
    [c,d]
  [b,c,d]
[a,b,c,d]



[-2, 3]

f(arr, 0) = arr[0];  // -2
f(arr, 1) = Max(sum([arr[0], arr[1]]), sum([arr[1]]))  // 3

f(arr, 0) = the maxsum subarray with arr[0] as right endpoint
f(arr, 1) = the maxsum subarray with arr[1] as right endpoint
f(arr, 2) = the maxsum subarray with arr[2] as right endpoint
f(arr, 3) = the maxsum subarray with arr[3] as right endpoint

Math.max(f(arr, 0), f(arr, 1), f(arr, 2), f(arr, 3));


Then:


*/


// The goal is: is there some function f(k) where
// f(i) can be expressed in terms of f(j) for i < j
// and f(n) is the answer we want.
//

// f(i) = f(i - 1) + f(i - 2)
// f(0) = 0
// f(1) = 1
