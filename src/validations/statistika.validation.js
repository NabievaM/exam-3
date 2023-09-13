const Joi = require("joi");

class statistikaValidation {
    static create(options) {
        const { error } = Joi.object({
            group_id: Joi.string().required(),
            student_id: Joi.string().required(),
            project: Joi.string().max(64).required(),
            ball: Joi.number().required(),
            grade: Joi.number().max(32).required(),
            status: Joi.boolean().required(),
        }).validate(options);

        if (error) return error;
        else return false;
    }
}

module.exports = { statistikaValidation };
