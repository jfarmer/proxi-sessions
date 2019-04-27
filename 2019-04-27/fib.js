// Time: O(n)   -- O(n^2)
// Space: O(1)  -- O(2^n)
// n -> 2n   n^2 -> (2n)^2 -> 4(n^2)
function fibRecursive(n, level = 0) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibRecursive(n - 1, level + 1) + fibRecursive(n - 2, level + 1);
}

// Time complexity is O(3^n)
// n choose
function tribonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}


/*
for each thing in foo
  foo = bar()
  foo = bar2(foo)
  foo = bar3(foo)

O(n*(bar + bar2 + bar3))

work(n) = work(n - 1) + work(n - 2)

2^n

gen = new SomethingGenerator();

while(!gen.done()) {
  value = gen.next();
}

gen.next()
gen.next()
gen.next()
*/

// Time: O(n)
// Space: O(1)
function fibIterative(n) {
  let a = 0, b = 1;

  for(let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

//        { 0               if n is 0
// f(n) = { 1               if n is 1
//        { f(n-1) + f(n-2) otherwise

// Time: O(n)
// Space: O(n)
// memoization

function fibMemo(n, memo = [0, 1], level = 0) {
  if (n === 0) return 0;
  if (n === 0) return 1;

  if (memo[n] === undefined) {
    memo[n] = fibMemo(n - 1, memo, level + 1) + fibMemo(n - 2, memo, level + 1)
  }

  return memo[n];
}

function memoize(fn) {
  const memo = new Map();

  return (...args) => {
    if (!memo.has(args)) {
      memo.set(args, fn(...args));
    }

    memo.get(args);
  }
}

// fibMemo = memoize(fibRecursive);

// console.log('\n\n\n');
// console.log('fibMemo:');
// fibMemo(8);


function *withIndex(iter) {
  let start = 0;

  for (let x of iter) {
    yield [x, start++];
  }
}

function elementAt(iter, n) {
  for (let [x, i] of withIndex(iter)) {
    if (i === n) {
      return x;
    }
  }
}

function *fibonaccis() {
  let [current, next] = [0, 1];

  while(true) {
    yield current;

    [current, next] = [next, current + next];
  }
}

function fibGen(n) {
  return elementAt(fibonaccis(), n);
}


module.exports = {
  fibRecursive,
  fibIterative,
  fibMemo,
  fibGen,
  fibonaccis,
  tribonacci
}
