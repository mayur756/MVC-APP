const mongoose = require('mongoose');

const dbconnect = async (req, res)  => {
     await mongoose.connect("mongodb://localhost:27017");
     console.log("connecting to mongoose");
};

module.exports=dbconnect;