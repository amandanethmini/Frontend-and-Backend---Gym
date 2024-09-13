const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,//validate
    },
    gmail: {
        type: String,
        required: true,//validate
    },

    messages: {
        type: String,
        required: true,//validate
    }
});

const collectiom = new mongoose.model('gym', userSchema)

module.exports = mongoose.model(
    "UserModel",//filename
    userSchema //functionname
)