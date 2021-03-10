// use Promise.all() if the tasks are dependent on each other or if you'd like to immediately reject upon any of them rejecting.

const codeProjectOne = new Promise((resolve, reject) => {
    resolve('Project 1 finished');
});

const codeProjectTwo = new Promise((resolve, reject) => {
    resolve('Project 2 finished');
});

const codeProjectThree = new Promise((resolve, reject) => {
    resolve('Project 3 finished');
});

Promise.all([
    codeProjectOne,
    codeProjectTwo,
    codeProjectThree
]).then((messages) => {
    console.log(messages);
}).catch((error) => {
    console.log(`Error in promises ${error}`);
});;

// In this case, if a Promise delay to resolve, the others has to wait