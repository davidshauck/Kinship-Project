//Connect to Mongo database
require("dotenv").config();
const mongoose = require('mongoose')
mongoose.Promise = global.Promise



//your local database url
//27017 is the default mongoDB port
const uri = process.env.MONGODB_URI || `mongodb://localhost/kinship_db`

mongoose.connect(uri).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log(`Connected to Mongo ${uri}`);
    },
    err => {
        /** handle initial connection error */
        console.log('error connecting to Mongo: ')
        console.log(err);
    }
);


module.exports = mongoose.connection