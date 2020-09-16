import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
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
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
  },
  submissions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "submission",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  datePosted: {
    type: Date,
  },
  dateDue: {
    type: Date,
    required: true,
  },
});

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;