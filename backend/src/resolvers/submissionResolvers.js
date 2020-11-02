import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";
import Submission from "../models/Submission.js";

export default {
  Mutation: {
    createSubmission: async (_, { submission }) => {
      const s = new Submission(submission);
      await s.save();
      await Assignment.updateOne(
        { _id: mongoose.Types.ObjectId(submission.assignmentId) },
        { $addToSet: { submissions: s._id } }
      );

      return s;
    },

    gradeSubmission: async (_, { id, grade }) => {
      await Submission.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { grade } });
      return grade;
    },

    updateSubmission: async (_, { id, submission }) => {
      return await Submission.findByIdAndUpdate(id, submission);
    },

    deleteSubmission: async (_, { id }) => {
      return await Submission.findByIdAndDelete(id);
    },
  },
};
