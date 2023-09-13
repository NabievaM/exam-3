const Joi = require("joi");

const authValidation = async (payload) => {
    const schema = Joi.object({
        username: Joi.string().max(64).required(),
        password: Joi.string().max(64).required(),
    });

    const { error } = schema.validate(payload);

    if (error) {
        return error;
    } else {
        return false;
    };
};

module.exports = authValidation;
