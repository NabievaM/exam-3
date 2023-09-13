const { Schema, model } = require("mongoose");
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    project_name: {
        type: String,
        required: true,
    },
    endtime: {
        type: Date,
        required: true,
    },
    group_id: {
        type: Schema.Types.ObjectId,
        ref: "Group",
        required: true,
    }
}, {
    timestamps: true
});

module.exports = model("Exam", schema);