// It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

// In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.

// The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

const promise1 = Promise.resolve(3);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
});

const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => {
    // results = [
    //  { status: 'fulfilled', value: 3 },
    //  { status: 'rejected', value: 'foo' },
    // ]
    results.forEach((result) => {
        console.log(result.status);
    });
});