import mongoose from "mongoose";
import Submission from "../models/Submission.js";
import Assignment from "../models/Assignment.js";

export default {
  Query: {
    submission: async (_, { id }) => {
      const su = await Submission.findOne({ _id: id }).exec();
      return su;
    },
    submissions: async () => Submission.find().exec(),
  },

  Mutation: {
    createSubmission: async (_, { submission }) => {
      const s = new Submission(submission);
      await s.save();
      Assignment.updateOne(
        { _id: mongoose.Types.ObjectId(submission.assignmentId) },
        { $addToSet: { submissions: s._id } }
      );
    },

    updateGrade: async (_, { gradeInput }) => {
      Submission.updateOne(
        { _id: mongoose.Types.ObjectId(gradeInput.submission) },
        { $set: { grade: gradeInput.grade } }
      );
      return gradeInput.grade;
    },
    // peerGradeSubmission: async (_, { peerGradeInput }) => {
    //   creates a new peer grade if the grader hasn't graded the assignment yet
    //   otherwise updates the student's grade
    //   return peerGradeInput; // TODO
    //}
  },
};
