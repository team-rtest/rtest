import mongoose from "mongoose";

import {
  getPresignedUpload,
  getPresignedDownload,
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
};
