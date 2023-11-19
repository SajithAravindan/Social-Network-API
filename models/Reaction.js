const { Schema, Types } = require('mongoose');// Import Schema and types package from mongoose
const moment = require('moment');

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
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = ReactionSchema;