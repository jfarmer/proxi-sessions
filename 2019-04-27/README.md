# Proxi Session - April 27, 2019

## Big-O ?

What is Big-O?

- Measure the performance of your program
- Measure the performance as the input grows

If we can measure it directly, why bother with Big-O?

We want our algorithms to be scalable.

We do, but...

- Machine independent

```javascript
// 0 1 1 2 3 5 8 13
// 0 1 2 3 4 5 6 7

function fibIterative(n) {
  let [a, b] = [0, 1];

  for(let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

const microtime = require('microtime');

function bench(fn) {
  const start = microtime.now();
  fn();

  return microtime.now() - start;
}

function sample(fn, n) {
  const results = [];

  for(let i = 0; i < n; i++) {
    results.push(bench(fn));
  }

  return results;
}
```

## How to tell difference?

Remember, if we have an algorithm there are many related functions we might care about:

- The worst-case running time of our algorithm as a function of `n`, the size of its input
- The best-case running time of our algorithm as a function of `n`, the size of its input
- The worst-case memory usage of our algorithm as a function of `n`, the size of its input
- The best-case memory usage of our algorithm as a function of `n`, the size of its input

We somehow want to order our algorithms by the way these related functions behave.  Does the worst-case running time of algorithm `A` grow faster, the same, or slower than the worst-case running time of algorithm `B`?

We'll be using `x` instead of `n` for our variable.

The heart of this problem is figuring out what "grows slower than" means.  We have an intuitive feeling that functions like `x`, `5x` and `5x + 10` grow similarly to each other but slower than `x^2`, `5x^4 + 10`, or `2^x`.

Since we're working with functions that represent running time and memory usage, we'll assume that the functions we're looking at always produce non-negative outputs.  To deal with potentially-negative functions, the overall thought process remains the same but involves absolute values.

We're going to try a few definitions that seem natural and see if they work for us, until eventually we reach something like Big-O.

We want something that works a bit like less-than-or-equal-to (`<=`) but for functions.  That is, we want to say things like:

- `f` grows no faster than `g`
- `g` grows no faster than `f`

Writing `f <= g` is confusing, so let's write `f ~<~ g` to mean `f` grows no faster than `g`. If we have that then we can say `f` grows like `g` if `f ~<~ g` and `g ~<~ f`.  We'll write that as `f ~~~ g`.

Let's think a bit about how `<=` works for numbers.  If we have two positive numbers `a` and `b` with

```text
a <= b
```

then one way we can test if they're equal is to see if

```text
a / b <= 1
```

What about for functions?  The direct translation of the above definition might be:

```text
Definition 1

We say f ~<~ g if f(x)/g(x) <= 1 (for all x)
```

Let's call this Definition 1. This definition has a few problems.

One thing we know for sure: we want our definition to tell us that `x`, `5x`, and `5x + 10` all grow in the same way.  How does Definition 1 stack up?

```text
f(x) = 5x
g(x) = x

f(x) / g(x) = (5x)/5 = 5
```

So, under Definition 1 we have `f` growing faster than `g`.  While this is true in the sense that `5x` has a steeper slope than `x`, it's still "growing" like `x`.

The quickest fix is Definition 2.  What if we say `f` grows no faster than `g` if

```text
Definition 2

We say f ~<~ g if f(x)/g(x) <= C (for all x, and for some positive constant C)
```

This works for `x` and `5x`, but what about `5x + 10`?

```
f(x) = 5x + 10
g(x) = x

f(x) / g(x) = (5x + 10) / x = 5 + 10/x
```

We can make `5 + 10/x` as big as we want by making `x` very small.  For example, if `x = 0.10` then `5 + 10/x` is `105`.  So there is no single number `C` that we can pick which will guarantee that `f(x) / g(x) <= C`.

It's only small `x` that present a problem and since we're trying to understand how the run-time of our algorithm grows with the size of our input,  we don't really care if there are small inputs that behave poorly.  One way to fix this is to say that small inputs don't count, leading to Definition 3:

```text
Definition 3

We say f ~<~ g if f(x)/g(x) <= C for some positive constant C and for large enough x.
```

Here "large enough" means that there's some fixed input `x0` and positive constant `C` such that `f(x) / g(x) <= C` for all `x >= x0`.  `x0` is the "enough" in "large enough."

And, in fact, this definition is enough.  This is the definition of Big-O that we use.  We say `f` if `O(g)` if `f(x)/g(x)` is bounded by a constant for large enough `x`.

How does this definition work for other functions?

```text
f(x) = x
g(x) = x^2

f(x)/g(x) = x / x^2 = 1/x <= 1 for all x >= 1

f(x) = log(x)
g(x) = x

f(x)/g(x) = log(x)/x <= 2 for all x >= 1
```

Try it for any pairs of functions you might want.  This definition also works for functions that do constant work for infinitely many inputs and non-constant input for infinitely many inputs.

For example, let's say we wanted to find the largest power of `k` that divided a number `n`.

```javascript
function largestPower(base, number) {
  let power = 0;
  let div = number;

  while(div % base === 0) {
    power++;
    div = Math.floor(div / base);
  }

  return power;
}
```

So `largestPower(2, n)` is the largest power of `2` that divides `n`.  Is `base` doesn't divide `n` then the function will return in constant time.  There are infinitely many values of `base` and `n` that satisfy this.  For example `base**k + 1` is never divisible by `base` for any positive integer `k` (because `base**k % base === 0`, so `(base**k + 1) % base === 1`).

When `n` is evenly divisible by a power of `2` then `largestPower(2, n)` will run as many times as `2` divides `n`.  This function's running time is all over the place in terms of its inputs.

For example, we know that that if `n = 2**k` for some `k` then `largerPower(2, n)` will take `k` steps.  We also know that `largestPower(2, 3**k)` will return after a single mod operation.

That means `largestPower(2, n)` is has running time of `O(log n)`.  There's always a larger input `n` that will take `log n` steps, so its running time eventually bounded above by a constant multiple of `log(n)` and we can't do any better than that using this algorithm.
