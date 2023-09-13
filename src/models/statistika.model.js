const { Schema, model } = require("mongoose");
const schema = new Schema({
    group_id: {
        type: Schema.Types.ObjectId,
        ref: "Group",
        required: true,
    },
    student_id: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    project: {
        type: String,
        required: true,
    },
    ball: {
        type: Number,
        required: true,
    },
    grade: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
});

module.exports = model("Statistika", schema);