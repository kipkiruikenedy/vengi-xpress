const express =require('express');
const mongoose= require('mongoose')
const router = express.Router();

const membersControlers= require('../controllers/members')

router.get("/", membersControlers.getAllmembers);
router.post("/", membersControlers.addMember);
router.get("/:id", membersControlers.getById);
router.put("/:id", membersControlers.updateMember);
router.delete("/:id", membersControlers.deleteMember);

module.exports = router;

