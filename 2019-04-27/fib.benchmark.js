const Benchmark = require('benchmark');
const suite = Benchmark.Suite();
const {
  fibRecursive,
  fibIterative,
  fibMemo,
  fibGen,
} = require('./fib');

const input = 100;


O(f)

O(2^f)

suite
  // .add('fibRecursive', () => {
  //   fibRecursive(input);
  // })
  .add('fibIterative', () => {
    fibIterative(input);
  })
  // .add('fibMemo', () => {
  //   fibMemo(input);
  // })
  .add('fibGen', () => {
    fibGen(input);
  })
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log('Fastest is ' + suite.filter('fastest').map('name'));
  })
  .run();
