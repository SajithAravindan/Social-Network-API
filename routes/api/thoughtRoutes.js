const router = require('express').Router();// Import the router package from express

// Import the functions from the thought-controller
const { getThoughts, 
    getThoughtById, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction } = require('../../controllers/thoughtController');

    // GET all and POST at /api/thoughts
    router.route('/').get(getThoughts).post(createThought);
    
    // GET one, PUT, and DELETE at /api/thoughts/:thoughtId
    router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

    // POST at /api/thoughts/:thoughtId/reactions
    router.route('/:thoughtId/reactions').post(addReaction);

    // DELETE at /api/thoughts/:thoughtId/reactions/:reactionId
    router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

    module.exports = router;// Export the router