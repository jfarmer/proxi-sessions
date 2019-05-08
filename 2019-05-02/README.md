# Dynamic Programming

Dynamic programming is a technique for solving problems that exhibit two properties:

1. [Optimal substructure][wiki-optimal-substructure]
1. [Overlapping subproblems][wiki-overlapping-subproblems]

Everything's clear now, right?  Just kidding!

Here is the basic pattern for a single variable. Say we have an input of size `n`.
1. Express the problem recursively so that we can solve the problem for a subpart of size `k` if we know how to solve it for subparts of inputs smaller than `k`.
1. Store and re-use the intermediate results, so that you never have to recalculate them.

It's useful to contrast problems that can be solved with dynamic programming from problems that can be solved by a [greedy algorithm][wiki-greedy-algorithm].

Consider the problem of finding largest sum among all contiguous subarrays in an input array of size `n`.

The brute force approach would be something like:

```javascript
const sum = array => array.reduce((x, y) => x + y);

const maxSubarraySum = array => Math.max(...subarrays(array).map(sum));
```

There are `O(n^2)` such subarrays.  Let's think about possible subproblems that might help us see a recursive approach that works with dynamic programming.

The hard part of dynamic programming is finding the right problem to solve.  We'll know we have the right problem when the recursive solution feels obvious.

Let's say our array is `[a, b, c, x]`.

When iterating over something we can index by integers (arrays, lists, strings, the integers themselves, etc.) it's common to try to solve problems like:

1. What is the solution to the problem for all objects starting at position `i`?
1. What is the solution to the problem for all objects ending at position `i`?

Then if we want to find the maximum or minimum value, we find the maximum across all values of `i` (from `1` to the value `n` we care about, or `0` to `n - 1` when dealing with arrays starting at index `0`).

In this case, consider if we define a function `maxSumWithEndpoint(arr, i)` that tells us the maximum sum of all contiguous subarrays in `arr` whose endpoint is at index `i`.  Then the maximum sum across all contiguous subarrays would become:

```javascript
const f = i => maxSumWithEndpoint(arr, i);

Math.max(f(0), f(1), f(2), ..., f(arr.length - 1))
```

What does `maxSumWithEndpoint` look like?

```
maxSumWithEndpoint(arr, 0) = arr[0]
maxSumWithEndpoint(arr, i) = max(arr[i], arr[i] + maxSumWithEndpoint(arr, i - 1));
```

Why does this work?  Because contiguous subarrays with `a[i]` as the right-most element come in one of two forms:

1. Just `[a[i]]`
1. `a[i]` appended to a subarray whose right-most element is `a[i-1]`

We can calculate the overall `max` as we move along, so our final function looks like:

```javascript
const maxSum = arr => maxSumAtEndpoint(arr, arr.length - 1)[1];

const maxSumAtEndpoint = (arr, i) => {
  if (i === 0) {
    return [arr[0], arr[0]];
  }

  let [maxAtEndpoint, maxOverall] = maxSumAtEndpoint(arr, i - 1);

  maxAtEndpoint = Math.max(arr[i], arr[i] + maxAtEndpoint);
  maxOverall = Math.max(maxOverall, maxAtEndpoint);

  return [maxAtEndpoint, maxOverall];
}
```

Now we memoize the results:

```javascript
const maxSum = arr => maxSumAtEndpoint(arr, arr.length - 1)[1];

const maxSumAtEndpoint = (arr, i, memo = []) => {
  if (typeof memo[i] !== "undefined" ) {
    return memo[i];
  }

  if (i === 0) {
    memo[i] = [arr[0], arr[0]];
  } else {
    let [maxAtEndpoint, maxOverall] = maxSumAtEndpoint(arr, i - 1, memo);

    maxAtEndpoint = Math.max(arr[i], arr[i] + maxAtEndpoint);
    maxOverall = Math.max(maxOverall, maxAtEndpoint);

    memo[i] = [maxAtEndpoint, maxOverall];
  }

  return memo[i];
}
```

[wiki-greedy-algorithm]: https://en.wikipedia.org/wiki/Greedy_algorithm
[wiki-overlapping-subproblems]: https://en.wikipedia.org/wiki/Overlapping_subproblems
[wiki-optimal-substructure]: https://en.wikipedia.org/wiki/Optimal_substructure
[wiki-memoization]: https://en.wikipedia.org/wiki/Memoization
