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
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  grade: Number,
  peerGrades: [
    {
      peer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
      },
      body: String,
      peerGrade: Number,
      timePeerGraded: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const submission = mongoose.model("submission", submissionSchema);

export default submission;
