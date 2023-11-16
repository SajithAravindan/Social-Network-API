const { Schema, model } = require('mongoose');// Import Schema and model package from mongoose

// Construct a new instance of the schema class
const userSchema = new Schema(
    {
        // Configure individual properties using Schema Types
        username: { type: String, required: true, unique: true, trim: true },
        email: {//Use Regex to validate correct email format
            type: String, required: true, unique: true, match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                "Please fill a valid email address",]
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
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
