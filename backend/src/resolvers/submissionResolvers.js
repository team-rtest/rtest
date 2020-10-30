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
    // peerGradeSubmission: async (_, { peerGradeInput }) => {
    //   creates a new peer grade if the grader hasn't graded the assignment yet
    //   otherwise updates the student's grade
    //   return peerGradeInput; // TODO
    //}
  },
};
