// Send tons of emails

// Assume that you have to perform a huge number of Async operations like sending bulk marketing emails to thousands of users.

for (let i = 0; i < 50000; i += 1) {
    sendMailForUser(user[i]); // Async operation to send a email
};

// This code it's not perfomant. So the stack will become too heavy and at one point of time, JavaScript will have a huge number of open HTTP connection which may kill the server.

// A simple performant approach would be to do it in batches. Take first 500 users, trigger the mail and wait till all the HTTP connections are closed. And then take the next batch to process it and so on.

// Like this:
// Async function to send mail to a list of users.
const sendMailForUsers = async (users) => {
    const usersLength = users.length;

    for (let i = 0; i < usersLength; i += 100) {
        const requests = users.slice(i, i + 100).map((user) => { // The batch size is 100. We are processing in a set of 100 users.
            return triggerMailForUser(user) // Async function to send the mail.
                .catch(e => console.log(`Error in sending email for ${user} - ${e}`)); // Catch the error if something goes wrong. So that it won't block the loop.
        });

        // requests will have 100 or less pending promises. 
        // Promise.all will wait till all the promises got resolves and then take the next 100.
        await Promise.all(requests)
            .catch(e => console.log(`Error in sending email for the batch ${i} - ${e}`)); // Catch the error.
    }
};

sendMailForUsers(userLists);