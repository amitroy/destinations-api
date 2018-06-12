const initDB = require('../db'); // eslint-disable-line no-unused-vars
const Destination = require('../models/destination');


module.exports.get_destination_by_id = (req, res, next) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/get_destination_by_id',
        requestParam: req.params.destinationID
    });
    next();
};
module.exports.get_destination_by_name = (req, res, next) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/get_destination_by_name',
        requestParam: req.params.destinationName
    });
    next();
};
module.exports.get_destination_by_country = (req, res, next) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/get_destination_by_country',
        requestParam: req.params.country
    });
    next();
};
module.exports.post_destination = (req, res, next) => {
    const destination = new Destination(req.body);
    destination.save((err, savedDestination) => {
        if (err) {
            next({
                status: 'error',
                outcome: err
            });
        } else {
            res.send({
                status: 'success',
                outcome: savedDestination
            });
        }
    });
};
module.exports.put_destination_by_id = (req, res, next) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/put_destination_by_id',
        requestParam: req.params.destinationID,
        requestBody: req.body

    });
    next();
};

module.exports.delete_destination_by_id = (req, res, next) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/delete_destination_by_id',
        requestParam: req.params.destinationID
    });
    next();
};