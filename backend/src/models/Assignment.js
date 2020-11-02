import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  body: String,
  maxGrade: {
    type: Number,
    required: true,
  },
  dateDue: {
    type: Date,
  },
  optional: {
    type: Boolean,
    default: false,
  },
  locked: {
    type: Boolean,
    default: true,
  },
  files: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "file",
  },
  submissions: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      files: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "file",
        },
      ],
      grade: Number,
      peerGrades: [
        {
          grader: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
          },
          grade: Number,
          comment: String,
          gradedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      submittedAt: {
        type: Date,
        default: Date.now,
      },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;
