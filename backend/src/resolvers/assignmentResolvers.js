import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";
import AssignmentGroup from "../models/AssignmentGroup.js";

export default {
  Mutation: {
    createAssignment: async (_, { assignmentGroupId, assignment }) => {
      const a = new Assignment(assignment);
      await a.save();
      await AssignmentGroup.updateOne(
        { _id: mongoose.Types.ObjectId(assignmentGroupId) },
        { $addToSet: { assignments: a._id } }
      );
      return a;
    },

    updateAssignment: async (_, { id, assignment }) =>
      await Assignment.findByIdAndUpdate(id, assignment),

    deleteAssignment: async (_, { id }) =>
      await Assignment.findByIdAndDelete(id),
  },
  Assignment: {
    mySubmission: async (assignment, __, { user }) =>
      assignment.submissions.find((element) =>
        element.student.equals(user._id)
      ),
  },
};
