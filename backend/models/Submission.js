import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    ref: "user",
    required: true,
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "assignment",
    required: true,
  },
  files: [
    {
      originalName: String,
      encoding: String,
      mimetype: String,
      path: String,
      size: Number,
      sizeFormatted: String,
    },
  ],
  submittedAt: {
    type: Date,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  peerGrades: [
    {
      peer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
      },
      peerGrade: {
          type: Number,
          required: true,
      },
      timeGraded: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const submission = mongoose.model("submission", submissionSchema);

export default submission;
