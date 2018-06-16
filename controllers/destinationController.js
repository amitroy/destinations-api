const initDB = require('../db'); // eslint-disable-line no-unused-vars
const Destination = require('../models/destination');


module.exports.get_destination_by_id = (req, res) => {
    Destination.findById(req.params.destinationId)
        .then((destination) => {
            res.send({
                status: 'OK',
                outcome: destination
            });
        })
        .catch((e) => {
            res.status(400).send({
                status: 'ERROR',
                outcome: e
            });
        });
};
module.exports.get_destination_by_name = (req, res) => {
    Destination.find({ name: req.params.destinationName })
        .then((destination) => {
            res.send({
                status: 'OK',
                outcome: destination
            });
        })
        .catch((e) => {
            res.status(400).send({
                status: 'ERROR',
                outcome: e
            });
        });
};

module.exports.get_destination_by_country = (req, res) => {
    Destination.find({ country: req.params.destinationCountry })
        .then((destination) => {
            res.send({
                status: 'OK',
                outcome: destination
            });
        })
        .catch((e) => {
            res.status(400).send({
                status: 'ERROR',
                outcome: e
            });
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
    Destination.findByIdAndUpdate(req.params.destinationId, req.body)
        .then((destination) => {
            res.send({
                status: 'OK',
                outcome: destination
            });
        })
        .catch((e) => {
            res.status(400).send({
                status: 'ERROR',
                outcome: e
            });
        });
};

module.exports.delete_destination_by_id = (req, res) => {
    Destination.findByIdAndRemove(req.params.destinationId)
        .then((destination) => {
            res.send({
                status: 'OK',
                outcome: `Destination ${destination.destinationId} successfully deleted`
            });
        })
        .catch((e) => {
            res.status(400).send({
                status: 'ERROR',
                outcome: e
            });
        });
};