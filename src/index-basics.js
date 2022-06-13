const { Observable } = require("rxjs");

// --------------- Obversable Object ----------------------
// The function is where we can emit data to the observers
const observable = new Observable(subcriber => {
  /* 
  subcriber.next('Hello world')
  subcriber.error('Error!')
  subcriber.next('Test')
  subcriber.complete() 
  */
  const id = setInterval(() => {
    subcriber.next('test')
  }, 1000)

  subcriber.complete()

  return () => {
    clearInterval(id);
  }
});

console.log('before')

// --------------- Observer Object ----------------------
// The next function is responsable for handling data push from the observable
const subscription = observable.subscribe({
  // value object is refer to the data emitted from the observable
  next: value => {
    console.log(value)
  },
  complete: () => {
    console.log('Completed called')
  },
  error: (err) => {
    console.error(err)
  }
})

console.log('after')
