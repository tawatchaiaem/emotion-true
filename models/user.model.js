var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
      }
})

var User = mongoose.model('users',UserSchema)
module.exports = User