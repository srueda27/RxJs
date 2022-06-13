/* import { of } from "rxjs";
import { map } from "rxjs/operators" */


/* 
const observable = of(1, 2, 3, 4, 5)
const numberWithPipe = observable.pipe(....)
 */

/* const observable = of(1, 2, 3, 4, 5).pipe(
  map(value => `$${value}`)
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
}) */

// import { fromEvent, of } from "rxjs";
// import { map, pluck, filter } from "rxjs/operators"

// const observable = fromEvent(
//   document,
//   'keydown'
// ).pipe(
//   // map(event => event.code)
//   /* pluck('code'),
//   filter(code => code === 'Space') */
// )

// const subscription = observable.subscribe({
//   next(value) {
//     console.log(value)
//   },
//   complete() {
//     console.log('Completed!')
//   }
// })


/* import { of } from "rxjs";
import { reduce } from "rxjs/operators"

const observable = of(1,2,3,4,5).pipe(
  reduce((accumulator, value) => accumulator + value, 0)
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
}) */

/* import { interval } from "rxjs";
import { reduce, take, scan } from "rxjs/operators"

const observable = interval(500).pipe(
  take(5),
  // reduce((accumulator, value) => accumulator + value, 0)
  scan((accumulator, value) => accumulator + value, 0)
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
}) */

/* import { interval } from "rxjs";
import { reduce, take, scan, tap } from "rxjs/operators"

const observable = interval(500).pipe(
  take(5),
  tap(value => console.log('oli: ', value)),
  reduce((accumulator, value) => accumulator + value, 0)
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
}) */


/* import { fromEvent, interval } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const button = document.getElementById('btn')
// outer observable
const observable = fromEvent(
  button,
  'click'
).pipe(
  // will run all inner observables at the same time
  mergeMap(() => {
    // inner observable
    return interval(1000).pipe(
      take(5)
    )
  })
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
}) */


import { fromEvent, interval } from "rxjs";
import { concatMap, take, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const button = document.getElementById('btn')
// outer observable
const observable = fromEvent(
  button,
  'click'
).pipe(
  // maintain only 1 observable active
  /* switchMap(() => {
    // inner observable
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
      take(5),
      tap({
        complete() {
          console.log('inner completed')
        }
      })
    )
  }) */
  // exhaustMap Operator ignores if there is any inner observable running
  // send the inner observable into queues
  concatMap(() => {
    // inner observable
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
      take(5),
      tap({
        complete() {
          console.log('inner completed')
        }
      })
    )
  })
)

const subscription = observable.subscribe({
  next(value) {
    console.log(value)
  },
  complete() {
    console.log('Completed!')
  }
})