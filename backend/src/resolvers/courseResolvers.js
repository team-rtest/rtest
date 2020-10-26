import mongoose from "mongoose";
import Course from "../models/Course.js";
import AssignmentGroup from "../models/AssignmentGroup.js";

export default {
  Query: {
    course: async (_, { id }, context) => {
      return await Course.findOne({
        _id: id,
        "sections.students": context.user,
      });
    },

    courses: async (_, __, context) => {
      return await Course.find({ "sections.students": context.user });
    },
  },

  Course: {
    assignmentGroups: async (course) => {
      return await AssignmentGroup.findById(course.assigmentGroups);
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

    updateCourse: async (_, { courseId, courseData }) => {
      return await Course.findByIdAndUpdate(courseId, courseData);
    },

    deleteCourse: async (_, { course }) => {
      return await Course.findByIdAndDelete(course);
    },
  },
};
