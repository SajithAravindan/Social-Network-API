const moment = require('moment');

// Helper function to format the date
module.exports = {
    formatDate: (date) => {
        return moment(date).format('MMM DD, YYYY [at] hh:mm a');
    }
}