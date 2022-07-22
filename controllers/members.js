const Members = require('../models/members')
const  mongoose  = require('mongoose');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllMembers = asyncWrapper(async (req, res) => {
  const members = await Members.find({})
  res.status(200).json({ members })
})

const addMember = asyncWrapper(async (req, res) => {
  const members = await Members.create(req.body)
  res.status(201).json({ members })
})

const getMember = asyncWrapper(async (req, res, next) => {
  const { id: memberID } = req.params
  const member = await Members.findOne({ _id: memberID })
  if (!member) {
    return next(createCustomError(`No member with id : ${memberID}`, 404))
  }

  res.status(200).json({ member })
})
const deleteMember = asyncWrapper(async (req, res, next) => {
  const { id: memberID } = req.params
  const member = await Members.findOneAndDelete({ _id: memberID })
  if (!member) {
    return next(createCustomError(`No member with id : ${memberID}`, 404))
  }
  res.status(200).json({ member })
})
const updateMember = asyncWrapper(async (req, res, next) => {
  const { id: memberID } = req.params
 const{ no,email,name,phone }=req.body;

  const member = await Members.findOneAndUpdate({ _id: memberID}, { no,email,name,phone}, {
    new: true,
    runValidators: true,
  })

  if (!member) {
    return next(createCustomError(`No member with id : ${memberID}`, 404))
  }

  res.status(200).json({ member })
})

module.exports = {
  getAllMembers,
  addMember,
  getMember,
  updateMember ,
  deleteMember,
}
