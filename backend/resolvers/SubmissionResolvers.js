import submission from "../models/Submission";

export default {
  Query: {
    submission: async (parent, { id }, { model: { Submission }, me }, info) => {
      const submission = await Submission.findById({ _id: id }).exec();
      return submission;
    },
  },
};
