import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";
import Submission from "../models/Submission.js";
import User from "../models/User.js";

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
    peerGradeSubmission: async (_, {submission, grader, peergrade }) => {
      const p = new peerGrade(
        {grader: grader, grade: peergrade.grade, comment: peergrade.comment}
      );
      await Submission.updateOne(
        { _id: mongoose.Types.ObjectId(submission)},
        { $addToSet: { peerGrades: p}}
       );
       return p; // TODO
    }
  },

  peerGrade:{
    grader: async (peerG) => await User.find({ _id: peerG.grader }),
  },
};
