const mongoose = require('mongoose');

//
// Schema
//
const Schema = mongoose.Schema;
const Destination = new Schema({
    createdBy: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    updatedBy: {
        type: String,
        lowercase: true,
        trim: true
    },
    country: {
        type: String,
        enum: ['India', 'United Kingdom', 'Australia', 'United States of America'],
        required: true
    },
    location: {
        lat: {
            type: String,
            required: true
        },
        long: {
            type: String,
            required: true
        }
    },
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    bestTimetoVisit: {
        from: {
            type: String,
            enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        to: {
            type: String,
            enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    },
    recommendedDuration: {
        days: {
            type: Number
        },
        nights: {
            type: Number
        }
    },
    description: {
        type: String,
        required: true
    },
    attractions: [{
        name: {
            type: String
        },
        description: {
            type: String
        },
        category: {
            type: String,
            enum: ['Religious', 'Landscape', 'Adventures', 'Kids']
        }
    }],
    spendingAverage: {
        dollars: {
            type: Number
        }
    },
    photos: [{
        url: {
            type: String
        },
        caption: {
            type: String
        }
    }]
}, {
    toObject: {
        virtuals: true
    }
});

Destination.virtual('destinationId').get(function getMongoId() {
    return this.id;
});

module.exports = mongoose.model('destinations', Destination);