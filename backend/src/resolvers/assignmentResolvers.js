import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";
import AssignmentGroup from "../models/AssignmentGroup.js";
import Submission from "../models/Submission.js";

export default {
  Query: {
    assignment: async (_, { id }) => {
      return await Assignment.findById(id);
    },

    assignments: async () => {
      return await Assignment.find();
    },
  },

  Assignment: {
    submissions: async (assignment) => {
      return await Submission.find({
        _id: assignment.submissions,
      });
    },
  },

  Mutation: {
    createAssignment: async (_, { assignment }) => {
      const a = new Assignment(assignment);
      await a.save();
      await AssignmentGroup.updateOne(
        { _id: mongoose.Types.ObjectId(assignment.assignmentGroupId) },
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
