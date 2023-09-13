const { Schema, model } = require("mongoose");
const schema = new Schema({
    studentLogin_id: {
        type: Schema.Types.ObjectId,
        ref: "isStudent",
        required: true,
    },
    text: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
);

module.exports = model("Student_exam", schema);