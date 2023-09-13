const Statistika = require("../models/statistika.model");

const create = async (req, res, next) => {
    try {
        const { group_id, student_id, project, ball, grade, status } = req.body;
        const statistika = await Statistika.create({ group_id, student_id, project, ball, grade, status });
        res.json({ message: "Success Create", statistika });
    } catch (error) {
        next(error)
    }
};

const find = async (req, res, next) => {
    try {
        const data = await Statistika.find();
        res.status(201).json({ message: "All Statistics", data });
    } catch (error) {
        next(error);
    }
};

const findOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const statistika = await Statistika.findById(id);
        res.json({ message: "Statistic", statistika });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { group_id, student_id, project, ball, grade, status } = req.body;
        const statistika = await Statistika.findByIdAndUpdate(id, {
            group_id, student_id, project, ball, grade, status
        });
        res.json({ message: "Success updated", statistika });
    } catch (error) {
        next(error)
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Statistika.findByIdAndDelete(id);
        res.json({ message: "Deleted..." });
    } catch (error) {
        next(error)
    }
};

module.exports = {
    create, find, findOne, update, remove,
};