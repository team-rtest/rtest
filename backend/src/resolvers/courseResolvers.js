import mongoose from "mongoose";
import Course from "../models/Course.js";
import AssignmentGroup from "../models/AssignmentGroup.js";
import User from "../models/User.js";

export default {
  Query: {
    course: async (_, { id }, context) =>
      await Course.findOne({
        _id: id,
        "sections.students": context.user,
      }),

    courseTeaching: async (_, { id }, context) =>
      await Course.findOne({
        _id: id,
        "sections.instructor": context.user,
      }),

    coursesTeaching: async (_, __, context) =>
      await Course.find({ "sections.instructor": context.user }),

    courses: async (_, __, context) =>
      await Course.find({ "sections.students": context.user }),
  },

  Course: {
    assignmentGroups: async (course) =>
      await AssignmentGroup.find({ _id: { $in: course.assignmentGroups } }),
  },

  Section: {
    instructor: async (section) => await User.findById(section.instructor),
    students: async (section) => await User.find({ _id: section.students }),
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

    updateCourse: async (_, { courseId, courseData }) =>
      await Course.findByIdAndUpdate(courseId, courseData),

    deleteCourse: async (_, { course }) =>
      await Course.findByIdAndDelete(course),
  },
};
