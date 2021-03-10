// return as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise

// If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors

// Essentially, this method is the opposite of Promise.all()

const promise1 = Promise.reject(0);

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'quick');
});

const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 500, 'slow');
});

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => {
    console.log(value);
});