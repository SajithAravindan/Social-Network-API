const router = require('express').Router();// Import the router package from express

// Import the functions from the user-controller
const {
    getUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend, 
    removeFriend} = require('../../controllers/userController');

    // GET all and POST at /api/users
    router.route('/').get(getUsers).post(createUser);

    // GET one, PUT, and DELETE at /api/users/:id
    router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
    
    // POST and DELETE at /api/users/:userId/friends/:friendId
    router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

    module.exports = router;// Export the router