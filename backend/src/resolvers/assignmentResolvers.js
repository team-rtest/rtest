import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";
import AssignmentGroup from "../models/AssignmentGroup.js";
import Submission from "../models/Submission.js";

export default {
  Assignment: {
    submissions: async (assignment) => {
      return await Submission.find({
        _id: assignment.submissions,
      });
    },
  },

  Mutation: {
    createAssignment: async (_, { assignmentGroup, assignment }) => {
      const a = new Assignment(assignment);
      await a.save();
      await AssignmentGroup.updateOne(
        { _id: mongoose.Types.ObjectId(assignmentGroup) },
        { $addToSet: { assignments: a._id } }
      );
      return a;
    },

    updateAssignment: async (_, { assignmentId, assignmentData }) => {
      return await Assignment.findByIdAndUpdate(assignmentId, assignmentData);
    },

    deleteAssignment: async (_, { assignment }) => {
      return await Assignment.findByIdAndDelete(assignment);
    },
  },
};
