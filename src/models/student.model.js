const { Schema, model } = require("mongoose");
const schema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        group_id: {
            type: Schema.Types.ObjectId,
            ref: "Group",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Student", schema);
