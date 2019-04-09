# Proxi: First Session

## Text Analysis Project

### Error Handling

### Method/Function Signatures

## Questions About First Week

## Starting on Project

## Why the empty thing?

Why empty array?

Why empty string?
  - Just ignoring the value that was passed
  - 'a', 'b'
  - It's like nothing but it's a valid string
  - The empty string is falsy
  - In some ways, it's the simplest string

```javascript
function longestString(strings) {
  // returns longest string in array +strings+

  if (strings.length === 0) {
    return null;
  }

// const longestSoFar = '';

//   strings.forEach((str) => {
//     if (str.length > longestSoFar.length) {
//       longestSoFar = str;
//     }
//   });

//   return longestSoFar;

  return strings.reduce(maxByLength, '');
}

longestString([])
  // - undefined / null
  // - ''

function maxByLength(str1, str2) {
  return str1.length >= str2.length ? str1 : str2;
}

longestString(strings1 + strings2)
  ===
maxByLength(longestString(strings1), longestString(strings2));

longest(strings1 + []) === longest(strings1)
  ===
maxByLength(longestString(strings1), longestString([]))

// The identity of the operation
concat(str, '') === str
append(arr, []) === arr
add(num, 0) === num
mul(num, 1) === num
union(set, emptySet) === set

max(num, -Infinity) === num
min(num, Infinity) === num

max(nums: Array<Number>)
max([]) === -Infinity

max(listA + listB) === max([max(listA), max(listB)])

or(bool, false) === bool
and(bool, true) === bool

any = (list) => list.reduce(or, false)
all = (list) => list.reduce(and, true)

// This forces any([]) === false
any(list1 + list2)
  ===
or(any(list1), any(list2))

// This forces all([]) === true
all(list1 + list2)
  ===
and(all(list1), all(list2))
```

1. Error handling (coerce, reject, ignore)
1. Corner cases (what to do with empty things?)
1. Think through exactly what you're returning and why, return things that will feel "nice" / unsurprising to other people using the code (or throw an error if you can't make it feel nice)
