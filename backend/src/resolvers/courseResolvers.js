import mongoose from "mongoose";
import Course from "../models/Course.js";
import User from "../models/User.js";

export default {
  Query: {
    course: async (_, { id }) => {
      const course = await Course.findOne({ _id: id }).populate(
        "assignmentGroups"
      );
      return course;
    },
    courses: async (_, __, context) => {
      if (!context.user) return;
      const user = await User.findOne({"username": context.user })
      return await Course.find({
        "sections.students": user,
      });
    },
  },
  Mutation: {
    createCourse: async (_, { course }) => {
      const c = new Course(course);
      c.sections.push({ number: 0 });
      await c.save();
      return c;
    },

    addStudentToCourse: async (_, { student, course, section }) => {
      if (!section) {
        section = 0;
      }

      await Course.updateOne(
        { _id: mongoose.Types.ObjectId(course), "sections.number": section },
        { $addToSet: { "sections.$.students": student } }
      );
      return student;
    },

    addInstructorToCourse: async (_, { instructor, course, section }) => {
      if (!section) {
        section = 0;
      }

      await Course.updateOne(
        { _id: mongoose.Types.ObjectId(course), "sections.number": section },
        { $set: { "sections.$.instructor": instructor } }
      );
      return instructor;
    },

    removeStudentFromCourse: async (_, { student, course, section }) => {
      if (!section) {
        section = 0;
      }

      await Course.updateOne(
        { _id: mongoose.Types.ObjectId(course), "sections.number": section },
        { $pull: { "sections.$.students": student } }
      );
      return student;
    },
  },
};
