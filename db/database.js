var mongoose = require("mongoose");
var dbURI='mongodb://admin:admin01478520@ds143594.mlab.com:43594/workprocess';
mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const db = mongoose.connection;
//console.log(db)
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});

module.exports = mongoose;