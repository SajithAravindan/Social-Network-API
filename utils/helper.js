const moment = require ('moment')// import the moment package

const formatDate = (date) =>  {    
    // return formatted date string;
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
}

// Export the function
module.exports = formatDate