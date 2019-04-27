# Proxi Session - Tuesday, April 16, 2019a

```
const overlapsWith = ([x1, y1]) => ([x2, y2]) => {
  return
}
```

```
[x1, y1]
[x2, y2]
```

```javascript
function isOverlapping([x1, y1], [x2, y2]) {
  return !(x2 > y1 || y2 < x1);
}
```

```javascipt
// Joody's algorithm
overlapping = filter(overlapsWith([2,5]), intervals);

merged = fold(merge, overlapping);

```
