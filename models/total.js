const mongoose  = require('mongoose');


const totalSchema = new mongoose.Schema({
    id:Number,
   name:'string',
   shares:Number,
   NLoan:Number,
   TBanking:Number,
   welfare:Number,
   Ishare:Number,
   emergency:Number,
   lprocessing:Number,
   registration:Number,
   Blaws:Number,
   addedAt: {
    type: Date,
    default: Date.now(),
  },

   
})
const Contributions = mongoose.model('Contributions', totalSchema);
module.exports=Contributions