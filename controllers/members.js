

const Members = require('../models/members')




const GetAllMembers=async(req, res) => {
  try {
    const members= await Members.find({})
    res.status(200).json({members})
  } catch (error) {
    res.status(500).json({msg:"an error occured"})
  }

  }


const CreateMembers=async(req, res) => {
  try {
    const members= await Members.create(req.body)
    res.status(200).json({members})
  } catch (error) {
    res.status(500).json({msg:"an error occured"})
  }
  }


const UpdateMembers=async(req, res) => {
  try {
    const members= await Members.findOneAndUpdate({})
    res.status(200).json({members})
  } catch (error) {
    res.status(500).json({msg:"an error occured"})
  }
  }
const deleteMember=async(req, res) => {
  try {
    const members= await Members.findOneAndUpdate({})
    res.status(200).json({members})
  } catch (error) {
    res.status(500).json({msg:"an error occured"})
  }
  }

const GetMember=async(req, res) => {
  try {
    const {id:memberID} = req.params;
    const members= await Members.findOne({id:memberID})
    res.status(200).json({members})
  } catch (error) {
    res.status(500).json({msg:"an error occured"})
  }
  }





  module.exports={
      GetAllMembers,
      UpdateMembers,
      CreateMembers,
      GetMember,
      deleteMember
  }