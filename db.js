const mongoose = require('mongoose');
const config = require('./config');

// Mongo DB connection
mongoose.connect(config.dbUrl);
mongoose.set('debug', false);
mongoose.connection
    .once('open', () => {
        console.log('DB connection success');
    })
    .on('error', (err) => {
        console.log(`Error occured ${err}`);
    });
module.exports = mongoose;