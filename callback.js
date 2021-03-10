const mongoose = require('mongoose');
const Store = mongoose.model('Store');

// my create action
exports.createStore = (req, res) => {
    const store = newStore(req.body);
    // My callback   
    store.save(function (err, store) {
        if (!err) {
            res.redirect('/somePath');
        } else {
            res.redirect('/someOtherPath', err);
        }
    });
};

// Callback hell
const StoreB = mongoose.model('StoreB');

exports.createStore = (req, res) => {
    const store = new Store(req.body);

    const id = req.params._id;

    storeB.findOne(id, (err, storeB) => {
        if (err) {
            return res.redirect('/someOtherPathA', err);
        };

        store.storeb_id = storeB._id;
        store.save((err, store) => {
            if (err) {
                res.redirect('/someOtherPathB', err);
            };

            res.redirect('/successPath', store);
        });
    });
};

// Callback hell
// Makes a burger
// makeBurger contains four steps:
//   1. Get beef
//   2. Cook the beef
//   3. Get buns for the burger
//   4. Put the cooked beef between the buns
//   5. Serve the burger (from the callback)
// We use callbacks here because each step is asynchronous.
//   We have to wait for the helper to complete the one step
//   before we can start the next step

const makeBurger = nextStep => {
    getBeef(function (beef) {
        cookBeef(beef, function (cookedBeef) {
            getBuns(function (buns) {
                putBeefBetweenBuns(buns, beef, function (burger) {
                    nextStep(burger);
                });
            });
        });
    });
};