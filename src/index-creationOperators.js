/* import { timer } from "rxjs";

const observable = timer(0, 1000);

// An observer can be created with just the next function, not passing the others into the subscribe
const subscription = observable.subscribe(
  console.log
) */

/* import { fromEvent } from "rxjs";

const observable = fromEvent(
  document,
  'click'
);

// An observer can be created with just the next function, not passing the others into the subscribe
const subscription = observable.subscribe(
  console.log
) */

/* import { of } from "rxjs";

const observable = of(1, 2, 3, 4, 5);

// An observer can be created with just the next function, not passing the others into the subscribe
const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
}) */

import { from } from "rxjs";

// const observable = from([1, 2, 3, 4, 5]);
// Waits for the promise to resolve first to complete the observable
const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));

// An observer can be created with just the next function, not passing the others into the subscribe
const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
})