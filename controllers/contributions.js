const { default: mongoose } = require('mongoose');

const Contribution = require('../models/contribution')

const connection_URL='mongodb+srv://admin:26Mexico@cluster0.eoh3v.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_URL, { useNewUrlParser: true, useUnifiedTopology: true } )

const GetAllContributions=async(req, res) => {
    try {
      const contribution= await Contribution.find({})
      res.status(200).json({Contribution})
    } catch (error) {
      
    }
  
    }
  
  
  const CreateContribution= async(req, res) => {
    try {
      const contribution= await Contribution.create(req.body)
      res.status(200).json({Contribution})
    } catch (error) {
      
    }
    }
  
  
  const UpdateContribution=async(req, res) => {
    try {
      const contribution= await Contribution.findOneAndUpdate({})
      res.status(200).json({Contribution})
    } catch (error) {
      
    }
    }
  
  const GetContribution=async(req, res) => {
    try {
      const {id:memberID} = req.params;
      const contribution= await Contribution.findOne({id:memberID})
      res.status(200).json({Contribution})
    } catch (error) {
      
    }
    }
  
  const deleteContribution=async(req, res) => {
    try {
      const {id:memberID} = req.params;
      const contribution= await Contribution.findOne({id:memberID})
      res.status(200).json({Contribution})
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