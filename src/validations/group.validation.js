const Joi = require("joi");

class groupValidation {
    static create(options) {
        const { error } = Joi.object({
            name: Joi.string().required(),
        }).validate(options);

        if (error) return error;
        else return false;
    }
}

module.exports = { groupValidation };
