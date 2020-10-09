import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";

export default {
  Query: {
    assignment: async (_, { id }) => {
      const a = await Assignment.findOne({ _id: id }).exec();
      return a;
    },

    assignments: async () => Assignment.find().exec(),
  },

  Mutation: {
    createAssignment: async (_, { assignment }) => {
      const a = new Assignment(assignment);
      await a.save();
      AssignmentGroup.updateOne(
        { _id: mongoose.Types.ObjectId(assignment.assignmentGroupId) },
        { $addToSet: { assignments: a._id } }
      );
      return a;
    },
  },
};
