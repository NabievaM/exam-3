const Joi = require("joi");

class studentValidation {
    static create(options) {
        const { error } = Joi.object({
            fullName: Joi.string().max(32).required(),
            phone: Joi.string().max(32).required(),
            username: Joi.string().max(32).required(),
            password: Joi.number().required(),
            group_id: Joi.string().max(32).required(),
        }).validate(options);

        if (error) return error;
        else return false;
    }
}

module.exports = { studentValidation };
