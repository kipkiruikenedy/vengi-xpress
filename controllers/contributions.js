
const mongoose  = require('mongoose'); 
const Contributions = require('../models/contribution')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const GetAllContributions = asyncWrapper(async (req, res) => {
  const contributions = await Contributions.find({})
  res.status(200).json({ contributions })
})

const CreateContribution = asyncWrapper(async (req, res) => {
  const contributions = await Contributions.create(req.body)
  res.status(201).json({contributions })
})

const GetContribution = asyncWrapper(async (req, res, next) => {
  const { id: contributionID } = req.params
  const contributions = await Contributions.findOne({ _id: contributionID })
  if (!contributions) {
    return next(createCustomError(`No member with id : ${contributionID}`, 404))
  }

  res.status(200).json({ member })
})
const deleteContribution = asyncWrapper(async (req, res, next) => {
  const { id: contributionID } = req.params
  const contributions = await Contributions.findOneAndDelete({ _id: contributionID })
  if (!contributions) {
    return next(createCustomError(`No member with id : ${contributionID}`, 404))
  }
  res.status(200).json({ contributions })
})
const UpdateContribution = asyncWrapper(async (req, res, next) => {
  const { id: contributionID } = req.params

  const contributions = await Contributions.findOneAndUpdate({ _id: contributionID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!contributions) {
    return next(createCustomError(`No member with id : ${contributionID}`, 404))
  }

  res.status(200).json({contributions })
})

module.exports = {
  GetAllContributions,
  UpdateContribution,
  CreateContribution,
  GetContribution,
  deleteContribution
}

  
  
  
  
   