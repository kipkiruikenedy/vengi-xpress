const  mongoose  = require('mongoose');

const MembersSchema = new mongoose.Schema({
    id:Number,
    name:'string',

    email:'string',   

    phone:Number,
 
})
const Members = mongoose.model('Members', MembersSchema);
module.exports=Members
