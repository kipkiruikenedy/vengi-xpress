const  mongoose  = require('mongoose');

const MembersSchema = new mongoose.Schema({
    id:{
        type:Number,
        autoIncreament:true,
        primaryKey:true,
        required:true,
    },
    name:{
        type:'string',
        required:true
    },
    email:{
        type:'string',
        required:true
    },
    phone:{
        type:Number,
        required:true
    }

   
})
const Members = mongoose.model('Members', MembersSchema);
module.exports=Members
