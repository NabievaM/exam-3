const Joi = require("joi");

class studentExamValidation {
    static create(options) {
        const { error } = Joi.object({
            studentLogin_id: Joi.string().required(),
            text: Joi.string().required(),
        }).validate(options);

        if (error) return error;
        else return false;
    }
}

module.exports = { studentExamValidation };
