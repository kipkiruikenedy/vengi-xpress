const  mongoose  = require('mongoose');

const MembersSchema = new mongoose.Schema({
    
    no: {
        type: Number,
        required: [true, 'must provide number'],
        trim: true,
        maxlength: [4, 'number can not be more than 4 characters'],
      },
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
    phone: {
        type: String,
        required: [true, 'must provide phone'],
        trim: true,
        maxlength: [10, 'phone can not be more than 10 characters'],
      },
    role: {
        type: String,
        required: [true, 'must provide role'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
        default: "member",
      },
      selectedDate: {
        type: Date
       
      }
    
    
    }
);
module.exports = mongoose.model("Members",MembersSchema);
