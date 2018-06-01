const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbUrl);
mongoose.connection
    .once('open', () => {
        console.log('DB connection success');
    })
    .on('error', (err) => {
        console.log(`Error occured ${err}`);
    });