import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    ref: "user",
    required: true,
  },
  assignment: {
    type: ObjectId,
    ref: "assignment",
    required: true,
  },
  files: [
    {
      originalName: String,
      encoding: String,
      mimetype: String,
      path: String,
      size: Int,
      sizeFormatted: String,
    },
  ],
  submittedAt: {
    type: Date,
    required: true,
  },
  grade: {
    type: Double,
    required: true,
  },
  peerGrades: [
    {
      peer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
      },
      peerGrade: {
          type: Double,
          required: true,
      }
    }
  ]
});

const submission = mongoose.model("submission", submissionSchema);

export default submission;
