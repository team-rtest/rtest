import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  subject: String,
  courseNumber: String,
  year: Number,
  semester: String,

  files: [  // Syllabus etc
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "file",
    },
  ],
  
  sections: [
    {
      section: Number,
      members: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
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
