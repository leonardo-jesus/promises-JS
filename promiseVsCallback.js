const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        });
    } else {
        callback('Thumbs up and subscribe');
    };
};

watchTutorialCallback((message) => {
    console.log(`Success: ${message}`);
}, (error) => {
    console.log(`${error.name} ${error.message}`);
});

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            });
        } else {
            resolve('Thumbs up and subscribe');
        };
    });
};

watchTutorialPromise().then((message) => {
    console.log(`Success: ${message}`);
}).catch((error) => {
    console.log(`${error.name} ${error.message}`);
});

// When you start to nests callbacks it harms the readability(callback hell), so use Promise instead