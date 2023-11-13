const router = require('express').Router();// Import the router package from express

// Import the functions from the user-controller
const {
    getUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend, 
    removeFriend} = require('../../controllers/user-controller');

    router.route('/').get(getUsers).post(createUser);// GET all and POST at /api/users
    router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);// GET one, PUT, and DELETE at /api/users/:id
    router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);// POST and DELETE at /api/users/:userId/friends/:friendId

    module.exports = router;// Export the router