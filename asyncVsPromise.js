function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if(location === 'Google') {
            resolve('Google says hi');
        } else {
            reject('We can only talk to Google');
        };
    });
};

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information + ${response}`);
    });
};

makeRequest('Google').then(response => {
    console.log('Response received');
    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => {
    console.log(err);
});

// async/await
async function doWork() {
    try {
        const response = await makeRequest('Google'); // Await and return the function resolved
        console.log('Response received'); // Executes as soon makeRequest is resolved
        const processedResponse = await processRequest(response); // Await and return the function resolved
        console.log(processedResponse); // Executes as soon processRequest is resolved
    } catch(err) {
        console.log(err);
    };
};

doWork();

// Most of the cases async/await will be better and simpler, async helps a lot with readability and is faster to write code. At this case, we used 11 lines with async/await against 26 lines against Promises
// await is used for calling an async function and waits for it to resolve or reject, because async function returns a promise

// Use cases
// If the output of function2 is dependent on the output of function1, I use await.
// If two functions can be run in parallel, create two different async functions and then run them in parallel. To run promises in parallel, create an array of promises and then use Promise.all(promisesArray).
// If your code contains blocking code, it is better to make it an async function. By doing this, you are making sure that somebody else can use your function asynchronously.

// Attention Points
// Every time you use await, remember that you are writing blocking code. Over time we tend to neglect this.
// Instead of creating huge async functions with many await asyncFunction() in it, it is better to create smaller async functions. This way, we will be aware of not writing too much blocking code. Another advantage of using smaller async functions is that you force yourself to think of which async functions can be run in parallel.