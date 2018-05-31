const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
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
//  API routes
//
app.use('/v1', routes);


app.listen(config.serverPort, () => {
    console.log(`Server listening at PORT ${config.serverPort}`);
});

/*

1. New Book
POST '/api/v1/createBookRecord'

2. Search Books
GET '/api/v1/searchBooks/author/:authorName
GET '/api/v1/searchBooks/isbn/:isbnNumber
GET '/api/v1/searchBooks/bookTitle/:bookTitle

3. Update Books
PUT '/api/v1/updateBook/isbn/:isbnNumber

4. Delete Books
DELETE '/api/v1/deleteBook/isbn/:isbnNumber


Node JS
Express
MongoDB
Passport
OAuth
Testing
Docker
*/