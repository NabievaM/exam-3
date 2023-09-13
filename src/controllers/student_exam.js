const Student_exam = require("../models/student_exam.model");
const create = async (req, res, next) => {
    try {
        const { studentLogin_id, text } = req.body;
        const file = req.body.file;
        const data = await Student_exam.create({ studentLogin_id, text, photo: file });
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