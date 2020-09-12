import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },

  courseCode: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  courseNumber: {
    type: String,
    required: true,
  },
  year: {
    type: Int,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  assignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "assignment",
    },
  ],
});

const course = mongoose.model("course", courseSchema);
export default course;
