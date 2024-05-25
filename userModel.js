const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    }
},{
    timestamps: true
}
);

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;