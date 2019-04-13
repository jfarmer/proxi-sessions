# Proxi Session - Saturday, April 13, 2019

## Robson

Worked on min-ORM project.

### Tiago's Comments

- An abstract base class might be called for here

### Things Jesse Noticed

- require('query-builder.js')
- callbacks, but nah, promises are better
- Using term "functional programming" incorrectly
- Positional arguments in User constructor
- SQL Injection w/ query builder?  (Looks like no)
- Close DB connection every time?
- Uncertain use of promises
- No id primary key in DB?
  - No, had id, but we not assigning it correctly

Things to talk about:
- What is functional programming?
- What is async?
- Why promises?

### Asynchronous Code

1. Callbacks
2. Promises
3. Async/await

```javascript
asyncMethod1((results) => {
  asyncMethod2(results, (moreResults) => {
    asyncMethod3(moreResults, (stillMoreResults) => {
      ...
    });
  })
});
```

```javascript
Promise.resolve(asyncMethod1())
       .then((thing1, thing2) => {
         return Promise.aksjdhakjsdh
       })
       .then(asyncMethod3)
       .then(...)
```

```javascript
results = await asyncMethod1();
moreResults = await asyncMethod2(results);
stillMoreResults = await asyncMethod3(moreResults);
...
```

### Reduce

What does `reduce` do, really?  If we have an infix operator like `+` in `x + y`, it's natural to imagine inserting `+` between each element of a list.

```reduce
// Imagine '+' is a function
reduce([1, 2, 3], 0, +) === 0 + 1 + 2 + 3
```

This makes it hard to see what reduce is really doing. In general, we give it a function `fn`, an initial value `x0`, and a list `[x1, x2, x3, ...]`.  From that, we get the following:

```javascript
const list = [x1, x2, x3, x4]
reduce(fn, x0, list) === fn(fn(fn(fn(x0, x1), x2), x3), x4)
```

What does it look like with a specific function, like `add`?

```javascript
const add = (x, y) => x + y;

reduce(add, 0, list) === add(add(add(add(0, x1), x2), x3), x4)
```

If we replace `add` with its definition, this becomes:

```javascript
add(add(add(add(0, x1), x2), x3), x4)
add(add(add((0 + x1), x2), x3), x4)
add(add((0 + x1) + x2), x3), x4)
add(((0 + x1) + x2) + x3), x4)
(((0 + x1) + x2) + x3) + x4)
```

Reduce is somtimes called "fold" because we "fold" the function `fn` over the list.

See: https://en.wikipedia.org/wiki/Fold_(higher-order_function)
