const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    username:{
        type: String,
        require: true,
    },
    passwordHash:{
        type: String,
        require: true,
    }
})

exports.User = mongoose.model('User', UserSchema);