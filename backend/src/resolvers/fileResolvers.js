import {
  getPresignedDownload,
  getPresignedUpload,
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
    getPropicUrl: async (_, __, { user }) =>
      await getPresignedUpload("public", "propics/" + user._id.toString() + ".png"),
  },
  Mutation: {
    addSubmissionFile: async (
      _,
      { course, assignment, submission, filename }
    ) => {
      return await uploadSubmission(course, assignment, submission, filename);
    },
    // TODO
    // registerSubmissionFile: async (_, { submission, file }) => {
    //   const metadata = await getFileMetadata(file.bucket, file.key);
    //   if (!metadata) {
    //     return;
    //   }

    //   const f = new File({
    //     ...file,
    //     size: metadata.ContentLength,
    //     mimetype: metadata.ContentType,
    //   });

    //   await f.save();
    //   await Submission.findByIdAndUpdate(submission, { $push: { files: f } });
    //   return f;
    // },
  },
};
