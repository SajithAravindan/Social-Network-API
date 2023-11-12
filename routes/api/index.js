const router = require('express').Router();// Import the router package from express
const userRoutes = require('./userRoutes');// Import the userRoutes folder
const thoughtRoutes = require('./thoughtRoutes');// Import the thoughtRoutes folder

router.use('/users', userRoutes);// Use the userRoutes folder for '/users' endpoints'
router.use('/thoughts', thoughtRoutes);// Use the thoughtRoutes folder for '/thoughts' endpoints'

module.exports = router;// Export the router

