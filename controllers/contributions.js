const { default: mongoose } = require('mongoose');

const Contributions = require('../models/contribution')

const GetAllContributions=async(req, res) => {
    try {
      const contributions= await Contributions.find({})
      res.status(200).json({contributions})
    } catch (error) {
      
    }
  
    }
  
  
  const CreateContribution= async(req, res) => {
    try {
      const contributions= await Contributions.create(req.body)
      res.status(200).json({contributions})
    } catch (error) {
      
    }
    }
  
  
  const UpdateContribution=async(req, res) => {
    try {
      const contributions= await Contributions.findOneAndUpdate({})
      res.status(200).json({contributions})
    } catch (error) {
      
    }
    }
  
  const GetContribution=async(req, res) => {
    try {
      const {id:memberID} = req.params;
      const contributions= await Contributions.findOne({id:memberID})
      res.status(200).json({contributions})
    } catch (error) {
      
    }
    }
  
  const deleteContribution=async(req, res) => {
    try {
      const {id:memberID} = req.params;
      const contributions= await Contributions.findOne({id:memberID})
      res.status(200).json({contributions})
    } catch (error) {
      
    }
    }
  
  
  
  
  
    module.exports={
        GetAllContributions,
        UpdateContribution,
        CreateContribution,
        GetContribution,
        deleteContribution
    }