const codeProjectOne = new Promise((resolve, reject) => {
    resolve('Project 1 finished');
});

const codeProjectTwo = new Promise((resolve, reject) => {
    resolve('Project 2 finished');
});

const codeProjectThree = new Promise((resolve, reject) => {
    resolve('Project 3 finished');
});

Promise.race([
    codeProjectOne,
    codeProjectTwo,
    codeProjectThree
]).then((message) => {
    console.log(message);
});

// In this case, return as soon any Promise is resolved