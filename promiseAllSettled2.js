Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(66), 0;
        })
    }), 
    99,
    Promise.reject(new Error('an error')),
]).then(values => console.log(values));

// Output:
// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   {
//     status: 'rejected',
//     reason: Error: an error
//         at Object.<anonymous> (D:\Code\Work\learning\promises\promiseAllSettled2.js:9:20)
//         at Module._compile (internal/modules/cjs/loader.js:1063:30)
//         at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
//         at Module.load (internal/modules/cjs/loader.js:928:32)
//         at Function.Module._load (internal/modules/cjs/loader.js:769:14)
//         at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//         at internal/main/run_main_module.js:17:47
//   }
// ]