const mongoose = require("mongoose");

//user schema
const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, "Please provide an Email!"],
        unique : [true, "Email Exist"],
    },
    password : {
        type : String,
        required : [true, "Please provide a password!"],
        unique : false,
    },
});

//export UserShema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);