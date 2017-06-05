var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    Distance: {type: Number, required: false},
    EstablishmentId: {type: Number, required: false},
    EstablishmentType: {type: String, required: false},
    Location: {type: String, required: false},
    MinCost: {type: Number, required: false},
    Name: {type: String, required: false},
    Stars: {type: Number, required: false},
    UserRating: {type: Number, required: false},
    UserRatingTitle: {type: String, required: false},
    UserRatingCount: {type: Number, required: false},
    ImageUrl: {type: String, required: false},
    ThumbnailUrl: {type: String, required: false},
});

module.exports = mongoose.model('Hotel', schema);
