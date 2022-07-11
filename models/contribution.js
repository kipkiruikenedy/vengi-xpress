const { default: mongoose } = require('mongoose');


const contributionSchema = new mongoose.Schema({
    id:{ type:Number},
   name:{ type:'string',required:true, },
   Shares:{type:Number},
   NLoan:{type:Number},
   TBanking:{type:Number},
   Welfare:{type:Number},
   IShares:{type:Number},
   Emergency:{type:Number},
   LProcessing:{type:Number},
   Registration:{type:Number},
   BLaws:{type:Number},
   date: { type: Date, default: Date.now  },

   
})
const Contribution = mongoose.model('Contribution', contributionSchema);
module.exports=Contribution