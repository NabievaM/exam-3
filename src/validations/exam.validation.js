const Joi = require("joi");

class examValidation {
    static create(options) {
        const { error } = Joi.object({
            name: Joi.string().min(3).required(),
            project_name: Joi.string().min(3).required(),
            endtime: Joi.string().min(3).required(),
            group_id: Joi.string().min(3).required(),
        }).validate(options);

        if (error) return error;
        else return false;
    }
}

module.exports = { examValidation };
