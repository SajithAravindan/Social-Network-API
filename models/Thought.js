const { Schema, model, Types } = require('mongoose');// Import Schema and model package from mongoose
const Reaction = require('./Reaction');// Import the Reaction model to use as a subdocument in Thought model
const formatDate = require('../utils/helper.js')// import the helper function to format the date

const ThoughtSchema = new mongoose.Schema({
    // Configure individual properties using Schema Types
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => formatDate(date)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
});

// Create a virtual called reactionCount that retrieves thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create the Thought model using the ThoughtSchema
const Thought = mongoose.model('Thought', ThoughtSchema);

// Export the Thought model
module.exports = Thought;
