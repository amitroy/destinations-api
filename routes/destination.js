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
router.get('/id/:destinationID', destinationController.get_destination_by_id);
router.get('/name/:destinationName', destinationController.get_destination_by_name);
router.get('/country/:country', destinationController.get_destination_by_country);

//
// POST
//
router.post('/', destinationController.post_destination);

//
// PUT
//
router.put('/id/:destinationID', destinationController.put_destination_by_id);

//
// DELETE
//
router.delete('/id/:destinationID', destinationController.delete_destination_by_id);

module.exports = router;