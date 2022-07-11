const express =require('express');
const mongoose= require('mongoose')
const router = express.Router();
const Members= require('../controllers/members')
const {  GetAllMembers,
  UpdateMembers,
  CreateMembers,
  GetMember,
  deleteMember}= require('../controllers/members')

router.route('/', Members).get(GetAllMembers ).post( CreateMembers);

 //Get individual memeber using id, update individual records, delete individual records
router.route('/:id',Members).get(GetMember).put(UpdateMembers).delete(deleteMember); 


module.exports = router
