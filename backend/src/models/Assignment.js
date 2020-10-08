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
    required: true,
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "submission",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;
