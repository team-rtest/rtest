import mongoose from "mongoose";

const assignmentGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Tag: {
    type: String,
    required: true,
    enum: ["HW", "TEST", "PEER"],
  },
  grading: {
    weight: {
      type: Number,
      required: true,
    },
    policy: {
      type: String,
      required: true,
    },
  },
  assignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "assignment",
    },
  ]
});

const assignmentGroup = mongoose.model("assignmentGroup", assignmentGroupSchema);

export default assignmentGroup;
