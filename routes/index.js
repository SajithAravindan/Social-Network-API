const router = require('express').Router();// Import the router package from express
const apiRoutes = require('./api');// Import the api folder

router.use('/api', apiRoutes);// Use the api folder for '/api' endpoints

router.use((req, res) => {// Any endpoint that doesn't exist,then a 404 error is ent back.
    res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;// Export the router