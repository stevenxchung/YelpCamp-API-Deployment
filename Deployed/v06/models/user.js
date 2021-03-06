var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    avatar: String,
    bio: String,
    isAdmin: {
        type: Boolean, 
        default: false
    }
});

// This will add methods from passport-local-mongoose into userSchema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);