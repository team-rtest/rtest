import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
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
        required: true
      },
      grade: Number,
      comment: String,
      gradedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const submission = mongoose.model("submission", submissionSchema);

export default submission;
