# Error Handling

Abbreviations I use a lot:

- e.g., Latin "exempla gratia", means "for example", por exemplo, p. ex.
- i.e., Latin "id est", means "that is"

There are three ways to handle unexpected input:

1. Coerce / Convert
1. Reject / Assert
1. Ignore

```javascript
function validateString(string) {
  return typeof string === 'string' || string instanceof String;
}

function arrayFrom(string) {
  return string.toString().split('');
}

function foo(args) {
  if args is not an array {
    args = [args]
  }

  // go forward, knowing that args is an array
}

foo(1), foo([1,2]), foo([1])

arrayFrom('hello')

arrayFrom(0)
  // - Now: []
  // - Throws an error because input isn't a string
  // - [0]
  // - ['0']
  // - undefined / null
arrayFrom(1234)
  // 1. Now: []
  // 2. Throws an error because input isn't a string
  // 3. [1234]
  // 4. ['1', '2', '3', '4']
  // 5. undefined / null

// Least surprising to most surprising
// 2. Throws an error because input isn't a string
// 4. ['1', '2', '3', '4']
// 5. undefined / null
// 3. [1234]
// 1. Now: []



arrayFrom(null)
arrayFrom(['a', 'b', 'b'])
```

## Coerce / Convert

Convert your unexpected input into something you can handle.

Want `input` to to be a number?
- `Number.parseInt(...)`
- `Number.parseFloat(...)`
- `Number(...)`

A string?
- `input.toString()`
- `String(...)`

An array?
- `Array.from(...)`
- `Array.of(...)`
- Not great: `Array(...)`

## Reject

If input isn't expected, throw an error.

## Ignore

Do nothing and let the code that follows handle it.

Bad if:
- Error messages are confusing (e.g., ')
- Results in error messages far from the source of the problem
- Code that follows doesn't handle it well

## Code Structure

1. Gather Input
1. Perform Work
1. Deliver Results
1. Handle Errors


## Monoids
