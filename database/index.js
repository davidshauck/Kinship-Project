//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
// const uri = process.env.MONGODB_URI || "mongodb://localhost/HamiltonWenhamDB"
const uri = "mongodb://heroku_k1j03bl4:5a3p1l43ip0vn69i45d38rm25@ds143594.mlab.com:43594/heroku_k1j03bl4"

mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection