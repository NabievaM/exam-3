const Users = require("../models/User.model");
const CustomError = require("../utils/custom-error");
const { generateToken } = require("../utils/jwt");

// const login = async (req, res, next) => {
//   try {
//     const { username, password, isVerified } = req.body;
//     const user = await Users.create({
//       username,
//       password,
//       isVerified,
//     });
//     const token = generateToken({ id: user.id });

//     res.send({ message: "success", token });
//   } catch (error) {
//     next(error);
//   }
// };

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const data = await Users.findOne({ username });
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
