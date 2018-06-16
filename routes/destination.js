const express = require('express');

const router = express.Router();

//
// Controllers
//
const destinationController = require('../controllers/destinationController');

//
// Destination routes
//

//
// GET
//
router.get('/id/:destinationId', destinationController.get_destination_by_id);
router.get('/name/:destinationName', destinationController.get_destination_by_name);
router.get('/country/:destinationCountry', destinationController.get_destination_by_country);

//
// POST
//
router.post('/', destinationController.post_destination);

//
// PUT
//
router.put('/id/:destinationId', destinationController.put_destination_by_id);

//
// DELETE
//
router.delete('/id/:destinationId', destinationController.delete_destination_by_id);

module.exports = router;