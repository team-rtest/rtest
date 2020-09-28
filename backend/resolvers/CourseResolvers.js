import assignment from "../models/Course";
export default {
  Query: {
    course: async (parent, { id }, { models: { Course }, me }, info) => {
      const course = await Course.findbyId({ _id: id }).exec();
      return course;
    },
  },
  Mutator: {
    createCourse: async (
      parent,
      courseInput,
      { models: { Course }, me },
      info
    ) => {
      const course = new Course(courseInput);
      await course.save();
      return course;
    },
  },
};
