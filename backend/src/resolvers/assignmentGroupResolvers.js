import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";
import AssignmentGroup from "../models/AssignmentGroup.js";
import Course from "../models/Course.js";

export default {
  // Query: {

  // },

  AssignmentGroup: {
    assignments: async (assignmentGroup) => {
      return await Assignment.find({ _id: assignmentGroup.assignments });
    },
  },

  Mutation: {
    createAssignmentGroup: async (_, { courseId, assignmentGroup }) => {
      const ag = new AssignmentGroup(assignmentGroup);
      await ag.save();
      await Course.updateOne(
        { _id: mongoose.Types.ObjectId(courseId) },
        { $addToSet: { assignmentGroups: ag } }
      );
      return ag;
    },

    updateAssignmentGroup: async (_, { id, assignmentGroup }) => {
      return await AssignmentGroup.findByIdAndUpdate(id, assignmentGroup);
    },

    deleteAssignmentGroup: async (_, { id }) => {
      return await AssignmentGroup.findByIdAndDelete(id);
    },
  },
};
