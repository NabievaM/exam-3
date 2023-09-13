const Joi = require("joi");

const studentLoginValidation = async (payload) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });

    const { error } = schema.validate(payload);

    if (error) {
        return error;
    } else {
        return false;
    };
};

module.exports = studentLoginValidation;
