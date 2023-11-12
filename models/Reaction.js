const { Schema, Types } = require('mongoose');// Import Schema and types package from mongoose
const formatDate = require('../utils/helper.js')// import the helper function to format the date

const ReactionSchema = new Schema({
    // Configure individual properties using Schema Types
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {//Use a getter method to format the timestamp on query
        type: Date,
        default: Date.now,
        get: (date) => formatDate(date)
    }
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = ReactionSchema;