import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
  endpoint: process.env.STORAGE_ENDPOINT,
  accessKeyId: process.env.STORAGE_ACCESS_KEY,
  secretAccessKey: process.env.STORAGE_SECRET_KEY,
});

export async function getPresignedUpload(bucket, key) {
  const url = s3.getSignedUrl("putObject", {
    Bucket: bucket,
    Key: key,
    Expires: 1000,
  });
  return url;
}

export async function getPresignedDownload(bucket, key) {
  const url = s3.getSignedUrl("getObject", {
    Bucket: bucket,
    Key: key,
    Expires: 1000,
  });
  return url;
}
