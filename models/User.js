const { Schema, model } = require('mongoose');
const moment = require('moment');// Require schema and model from mongoose

// Construct a new instance of the schema class
const userSchema = new Schema(
    {
        // Configure individual properties using Schema Types
        username: { type: String, required: true, unique: true, trim: true },
        email: {
            type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",]
        },
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Create the User model using the UserSchema
const User = model('User', userSchema);
// Export the User model
module.exports = User;
