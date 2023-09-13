const Student = require("../models/student.model");
const { studentValidation } = require("../validations/student.Validation");
const CustomError = require("../utils/custom-error");

const create = async (req, res, next) => {
    try {
        const { fullName, phone, username, password, group_id } = req.body;

        const error = studentValidation.create({ fullName, phone, username, password, group_id });
        if (error) throw new CustomError(400, error.message);

        const student = await Student.create({
            fullName, phone, username, password, group_id
        });
        res.json({ message: "Created", student });
    } catch (error) {
        next(error);
    }
};

const find = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.json({ message: "Students", students });
    } catch (error) {
        next(error);
    }
};

const findOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.json({ message: "Student", student })
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { fullName, phone, username, password, group_id } = req.body;
        const student = await Student.findByIdAndUpdate(id, { fullName, phone, username, password, group_id });
        res.json({ message: "Success updated", student })
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Student.findByIdAndDelete(id);
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
