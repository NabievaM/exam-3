const Exam = require("../models/exam.model");
const { examValidation } = require("../validations/exam.validation");

const create = async (req, res, next) => {
    try {
        const { name, project_name, endtime, group_id } = req.body;

        const error = examValidation.create({ name, project_name, endtime, group_id });
        if (error) throw new CustomError(400, error.message);

        const exam = await Exam.create({ name, project_name, endtime, group_id });
        res.json({ message: "Success Created", exam });
    } catch (error) {
        next(error)
    }
};

const find = async (req, res, next) => {
    try {
        const exam = await Exam.find();
        res.json({ message: "Exam", exam })
    } catch (error) {
        next(error)
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, project_name, endtime, group_id } = req.body;
        const exam = await Exam.findByIdAndUpdate(id, { name, project_name, endtime, group_id });
        res.json({ message: "Success updated", exam })
    } catch (error) {
        next(error)
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Exam.findByIdAndDelete(id);
        res.json({ message: "Deleted..." });
    } catch (error) {
        next(error)
    }
};

module.exports = {
    create, find, update, remove
};