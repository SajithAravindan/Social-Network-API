const {User , Thought} = require('../models');

module.exports = {
    //Get all thoughts
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
    //Get a single thought by its thoughtId and related reactions
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
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
    //Create a new thought
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
    //Update a thought by its thoughtId
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId }, 
            { $set: req.body }, 
            { runValidators: true, new: true })
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
    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.parms.thoughtId})
        .then((dbThoughtData) => {
            !dbThoughtData
            ? res.status(404).json({ message: 'No thought found with this id!' })   
            : User.findOneAndUpdate(
                { username: dbThoughtData.username},
                { $pull: { thoughts: req.params.thoughtId}},
                { new: true}        
            )
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
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
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
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )   
        .then(dbThoughtData => {        
            !dbThoughtData 
            ? res.status(404).json({ message: 'No thought found with this id!' }) 
            : res.json(dbThoughtData);                
        })  
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }); 
    }

};