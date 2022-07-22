const  mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
    email: {
        type: String,
        required: [true, 'must provide email'],
        trim: true,
        maxlength: [30, 'email can not be more than 30 characters'],
      },
    password: {
        type: String,
        required: [true, 'must provide phone'],
        trim: true,
        maxlength: [10, 'phone can not be more than 10 characters'],
      },

    }
);
module.exports = mongoose.model("user",UserSchema);
