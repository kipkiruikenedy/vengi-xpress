const express = require('express')
const router = express.Router()

const {
    getAllMembers,
    addMember,
    getMember,
    updateMember ,
    deleteMember,
 
} = require('../controllers/members')

router.route('/').get(getAllMembers).post(addMember)
router.route('/:id').get(getMember).patch(updateMember).delete(deleteMember)

module.exports = router
