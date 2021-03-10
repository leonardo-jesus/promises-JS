const promise = new Promise((resolve, reject) => {
    const a = 1 + 1;
    
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    };
});

promise.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});

// Are goods when you need wait a long time, like downloading a image from different server