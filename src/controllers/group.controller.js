const Group = require("../models/group.model");

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const group = await Group.create({
      name,
    });
    res.json({ message: "Created", group });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const groups = await Group.find();
    res.json({ message: "Groups", groups });
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const group = await Group.findById(id);
    res.json({ message: "Group", group })
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const group = await Group.findByIdAndUpdate(id, { name });
    res.json({ message: "Success updated", group })
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Group.findByIdAndDelete(id);
    res.json({ message: "Deleted..." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  find,
  findOne,
  update,
  remove,
};
