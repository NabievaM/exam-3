const isStudent = require("../models/is-student");
const CustomError = require("../utils/custom-error");
const { generateToken } = require("../utils/jwt");

// const login = async (req, res, next) => {
//     try {
//         const { username, password } = req.body;
//         const student = await isStudent.create({
//             username,
//             password,
//         });
//         const token = generateToken({ id: student.id });

//         res.send({ message: "success", token });
//     } catch (error) {
//         next(error);
//     }
// };

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const data = await isStudent.findOne({ username });
        if (data.username !== username)
            throw new CustomError(401, "username  or password incorrect");

        if (data.password !== password)
            throw new CustomError(404, "username or password incorrect");

        const token = generateToken({ id: data.id });

        res.status(200).send({ message: "Success", token: token });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
};
