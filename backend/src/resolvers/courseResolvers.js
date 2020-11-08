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
      await Course.find({
        "sections.instructor": context.user
      }),

    courses: async (_, __, context) =>
      await Course.find({ "sections.students": context.user }),
  },

  Course: {
    assignmentGroups: async (course) =>
      await AssignmentGroup.find({ _id: { $in: course.assignmentGroups } }),

    mySection: async (course, __, { user }) =>
      course.sections.find((element) =>
        element.students.equals(user._id)
      ),
  },

  Section: {
    instructor: async (section) => await User.findById(section.instructor),
    assistants: async (section) => await User.find({ _id: section.assistants }),
    students: async (section) => await User.find({ _id: section.students }),
  },

  Mutation: {
    createCourse: async (_, { course }) => {
      const c = new Course(course);
      c.sections.push({ number: 0 });
      await c.save();
      return c;
    },

    updateCourse: async (_, { id, course }) =>
      await Course.findByIdAndUpdate(id, course),

    deleteCourse: async (_, { id }) => await Course.findByIdAndDelete(id),

    addInstructorToCourse: async (_, { instructorId, courseId, section }) => {
      return await Course.updateOne(
        { _id: mongoose.Types.ObjectId(courseId), "sections.number": section },
        { $set: { "sections.$.instructor": instructorId } }
      );
    },

    addStudentToCourse: async (_, { studentId, courseId, section }) => {
      return await Course.updateOne(
        { _id: mongoose.Types.ObjectId(courseId), "sections.number": section },
        { $addToSet: { "sections.$.students": studentId } }
      );
    },

    removeStudentFromCourse: async (_, { studentId, courseId, section }) => {
      return await Course.updateOne(
        { _id: mongoose.Types.ObjectId(courseId), "sections.number": section },
        { $pull: { "sections.$.students": studentId } }
      );
    },
  },
};
