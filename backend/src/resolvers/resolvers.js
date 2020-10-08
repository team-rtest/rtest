import mongoose from "mongoose";
import Course from "../models/Course.js";
import Assignment from "../models/Assignment.js";
import Submission from "../models/Submission.js";
import User from "../models/User.js";
import AssignmentGroup from "../models/AssignmentGroup.js";
import {
  getPresignedUpload,
  getPresignedDownload,
} from "../routes/fileHandler.js";

export const resolvers = {
  /*
  Resolvers are structured as follows
  resolver: async(root, args, context, info) => {
    // do something
  }

  info is probably useless for most of your needs
  */
  Query: {
    hello: () => "hi",
    course: async (_, { id }) => {
      const course = await Course.findOne({ _id: id }).populate(
        "assignmentGroups"
      );
      return course;
    },
    user: async (_, { id, username }) => {
      if (id) {
        const s = await User.findOne({ _id: id }).exec();
      } else if (username) {
        const s = await User.findOne({ username: username }).exec();
        return s;
      }
    },

    assignment: async (_, { id }) => {
      const a = await Assignment.findOne({ _id: id }).exec();
      return a;
    },
    assignmentGroup: async (_, { id }) => {
      const a = await AssignmentGroup.findOne({ _id: id }).exec();
      return a;
    },
    submission: async (_, { id }) => {
      const su = await Submission.findOne({ _id: id }).exec();
      return su;
    },

    courses: async (_, __, context) => {
      console.log(await context.user);
      Course.find().exec();
    },

    assignments: async () => Assignment.find().exec(),
    assignmentGroups: async () => AssignmentGroup.find().exec(),
    submissions: async () => Submission.find().exec(),

    getPresignedUpload: async (_, { bucket, key }) => {
      return await getPresignedUpload(bucket, key);
    },
    getPresignedDownload: async (_, { bucket, key }) => {
      return await getPresignedDownload(bucket, key);
    },
  },
  Mutation: {
    createCourse: async (_, { course }) => {
      const c = new Course(course);
      await c.save();
      return c;
    },

    // createUser: async (_, { user }) => {
    //   User.register(
    //     new User({
    //       username: user.username,
    //       email: user.email,
    //       firstName: user.firstName,
    //       lastName: user.lastName,
    //     }),
    //     user.password,
    //     (err, user) => {
    //       if (err) {
    //         return { status: "Authentication failed" };
    //       } else {
    //         passport.authenticate("local")(req, res, () => {
    //           const token = generateToken({ username: req.user.username });
    //           res.cookie("token", token, {
    //             path: "/",
    //             secure: true,
    //             httpOnly: true,
    //             sameSite: "strict",
    //           });
    //           return { status: "Successfully Logged In" };
    //         });
    //       }
    //     }
    //   );
    // },

    createAssignmentGroup: async (_, { assignmentGroup }) => {
      const ag = new AssignmentGroup(assignmentGroup);
      await ag.save();
      Course.updateOne(
        { _id: mongoose.Types.ObjectId(assignmentGroup.courseId) },
        { $push: { assignmentGroups: ag._id } },
        (err, docs) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Triggered updating course subroutine");
          }
        }
      );
      return ag;
    },

    createAssignment: async (_, { assignment }) => {
      const a = new Assignment(assignment);
      await a.save();
      AssignmentGroup.updateOne(
        { _id: mongoose.Types.ObjectId(assignment.assignmentGroupId) },
        { $push: { assignments: a._id } }
      );
      return a;
    },

    createSubmission: async (_, { submission }) => {
      const s = new Submission(submission);
      await s.save();
      Assignment.updateOne(
        { _id: mongoose.Types.ObjectId(submission.assignmentId) },
        { $push: { submissions: s._id } }
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
