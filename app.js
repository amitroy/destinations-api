const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const destinationRoutes = require('./routes/destination');
const config = require('./config');

const app = express();
app.server = http.createServer();

//
// Middleware
//
app.use(bodyParser.json({
    limit: config.bodyLimit
}));

//
//  API routes V1
//
app.use('/api/v1/destination', destinationRoutes);

app.listen(config.serverPort, () => {
    console.log(`Server listening at PORT ${config.serverPort}`);
});