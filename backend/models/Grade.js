import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true,
        unique: true,
    },
    submission: {
        type: ObjectId,
        ref: 'Submission',
        required: true,
    },
    grade: {
        type: Double,
        required: true,
    },

});

const grade = mongoose.model("grade", gradeSchema);

export default grade;
