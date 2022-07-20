

const Members = require('../models/members')




const getAllmembers = async (req, res, next) => {
  let members;
  try {
    members = await Members.find();
  } catch (err) {
    console.log(err);
  }

  if (!members) {
    return res.status(404).json({ message: "No data found" });
  }
  return res.status(200).json({ members });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let member;
  try {
    member = await Members.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!member) {
    return res.status(404).json({ message: "No data found" });
  }
  return res.status(200).json({ member });
};

const addMember = async (req, res, next) => {
  const { no, name, email, phone, role } = req.body;
  let member;
  try {
    member = new Members({
      no,
      name,
      email,
      phone,
      role,
   
    });
    await member.save();
  } catch (err) {
    console.log(err);
  }

  if (!member) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ member });
};

const updateMember = async (req, res, next) => {
  const id = req.params.id;
  const { no, name, email, phone, role } = req.body;
  let member;
  try {
    member = await Members.findByIdAndUpdate(id, {
      no,
      name,
      email,
      phone,
      role,
    });
    member = await member.save();
  } catch (err) {
    console.log(err);
  }
  if (!member) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ member });
};

const deleteMember = async (req, res, next) => {
  const id = req.params.id;
  let member;
  try {
    member = await Members.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!member) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllmembers = getAllmembers;
exports.addMember= addMember;
exports.getById = getById;
exports.updateMember = updateMember;
exports.deleteMember = deleteMember;



 