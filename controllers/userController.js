const User = require('../models/User');// Import the User model
const Thought = require('../models/Thought');// Import the Thought model

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .select('-__v')// Exclude the __v property
            .sort({ _id: -1 })// Sort in descending order by the _id value
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Get one user by id
    getUserById(req, res) {
        User.findOne({ _id: req.params.id })
            .select('-__v')
            .sort({ _id: -1 })
            .populate({// Populate the friends and thoughts fields
                path: 'friends',
                select: '-__v'
            })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                // Otherwise, send the data
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Create a user
    createUser(req, res) {
        User.create(req.params.body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Update a user by id
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.params.body, { new: true, runValidators: true })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                // Otherwise, send the data
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Delete a user by id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                // Otherwise, send the data
                // BONUS: Clean up any user associated thoughts
                return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
            }
            )
            .then(() => {
                res.json({ message: 'User and associated thoughts deleted!' });
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    }
};

