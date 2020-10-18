import {
  getPresignedUpload,
  getPresignedDownload,
  uploadSubmission,
} from "../routes/fileHandler.js";

export default {
  Query: {
    getPresignedUpload: async (_, { bucket, key }) => {
      return await getPresignedUpload(bucket, key);
    },
    getPresignedDownload: async (_, { bucket, key }) => {
      return await getPresignedDownload(bucket, key);
    },
  },
  Mutation :{
    addSubmissionFile: async (
      _,
      { course, assignment, submission, filename }
    ) => {
      return await uploadSubmission(course, assignment, submission, filename);
    },
  },
};
