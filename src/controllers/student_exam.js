const Student_exam = require("../models/student_exam.model");
const { studentExamValidation } = require("../validations/student_exam.validation");
const CustomError = require("../utils/custom-error");

const create = async (req, res, next) => {
    try {
        const { studentLogin_id, text } = req.body;

        const error = studentExamValidation.create({ studentLogin_id, text });
        if (error) throw new CustomError(400, error.message);

        const data = await Student_exam.create({ studentLogin_id, text });
        res.json({ message: "Success created", data });

    } catch (error) {
        next(error);
    }
};

const find = async (req, res, next) => {
    try {
        const data = await Student_exam.find();
        res.status(201).json({ message: "Students exams", data });
    } catch (error) {
        next(error);
    }
};
module.exports = {
    create, find,
};