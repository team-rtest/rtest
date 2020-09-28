import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    enum: ["PEERGRADED", "CODING"],
  },
  body: {
    type: String,
  },
  pointsPossible: {
    type: Number,
    required: true,
  },
  submissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "submission",
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  datePosted: Date,
  dateDue: {
    type: Date,
    required: true,
  },
});

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;
