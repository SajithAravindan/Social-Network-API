const {User , Thought} = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .select('-__v')
            .sort({ _id: -1 })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .then(dbThoughtData => {
                !dbThoughtData 
                ? res.status(404).json({ message: 'No thought found with this id!' }) 
                : res.json(dbThoughtData);                
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                return User.findOneAndUpdate(
                    {username: req.body.username},
                    {$addToSet: {thoughts: dbThoughtData._id}},
                    {new: true}
                );
            })
            .then(dbUserData => {
                !dbUserData 
                ? res.status(404).json({ message: 'No user found with this username!' }) 
                : res.json(dbUserData);                
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    updateThought(req, res) {
    },
    deleteThought(req, res) {
    },
    addReaction(req, res) {
    },
    removeReaction(req, res) {
    }

};