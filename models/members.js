const  mongoose  = require('mongoose');

const MembersSchema = new mongoose.Schema({
    no:Number,
    name:'string',

    email:'string',   

    phone:Number,
    role:'string'
 
});
module.exports = mongoose.model("Members",MembersSchema);
