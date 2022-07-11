const express =require('express');
const router = express.Router();
const contributions = require('../controllers/contributions')
const {
  GetAllContributions,
  UpdateContribution,
  CreateContribution,
  GetContribution,
  deleteContribution
}= require('../controllers/contributions')


router.route('/').get(GetAllContributions ).post( CreateContribution)

router.route('/:id').get(GetContribution).put( UpdateContribution).delete( deleteContribution); 
module.exports = router
