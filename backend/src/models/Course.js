import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: String, // Data Mining
  code: String, // CS470
  semester: String, // Fall 2020
  files: [
    // Syllabus etc
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "file",
    },
  ],
  sections: [
    {
      number: Number,
      instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      assistants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
      students: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
    },
  ],
  assignmentGroups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "assignmentGroup",
    },
  ],
});

const course = mongoose.model("course", courseSchema);
export default course;
