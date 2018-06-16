const initDB = require('../db'); // eslint-disable-line no-unused-vars
const Destination = require('../models/destination');


module.exports.get_destination_by_id = (req, res) => {
    console.log({
        message: 'UNIMPLEMENTED ENDPOINT/get_destination_by_id',
        requestParam: req.params.destinationID
    });

    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/get_destination_by_id',
        requestParam: req.params.destinationID
    });
};
module.exports.get_destination_by_name = (req, res) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/get_destination_by_name',
        requestParam: req.params.destinationName
    });
};
module.exports.get_destination_by_country = (req, res) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/get_destination_by_country',
        requestParam: req.params.country
    });
};
module.exports.post_destination = (req, res) => {
    const destination = new Destination(req.body);
    destination.save()
        .then((savedData) => {
            res.send({
                status: 'OK',
                outcome: savedData
            });
        })
        .catch((e) => {
            res.status(400).send({
                status: 'ERROR',
                outcome: e
            });
        });
};
module.exports.put_destination_by_id = (req, res) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/put_destination_by_id',
        requestParam: req.params.destinationID,
        requestBody: req.body

    });
};

module.exports.delete_destination_by_id = (req, res) => {
    res.send({
        message: 'UNIMPLEMENTED ENDPOINT/delete_destination_by_id',
        requestParam: req.params.destinationID
    });
};