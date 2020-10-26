import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
  endpoint: process.env.STORAGE_ENDPOINT,
  accessKeyId: process.env.STORAGE_ACCESS_KEY,
  secretAccessKey: process.env.STORAGE_SECRET_KEY,
  s3ForcePathStyle: true,
});

const publicBucketPolicy = {
  Version: "2012-10-17",
  Statement: [
    {
      Sid: "PublicRead",
      Effect: "Allow",
      Principal: "*",
      Action: ["s3:GetObject", "s3:GetObjectVersion"],
      Resource: ["arn:aws:s3:::public/*"],
    },
  ],
};

export function initObjectStorage() {
  s3.createBucket(
    {
      Bucket: "rtest",
    },
    (err, _) => {
      if (err && err.code !== "BucketAlreadyOwnedByYou") {
        console.log(err.code);
      } else {
        console.log("Successfully Initialized S3 bucket 'rtest'");
      }
    }
  );

  s3.createBucket(
    {
      Bucket: "public",
    },
    (err, _) => {
      if (err && err.code !== "BucketAlreadyOwnedByYou") {
        console.log(err.code);
      } else {
        s3.putBucketPolicy(
          {
            Bucket: "public",
            Policy: JSON.stringify(publicBucketPolicy),
          },
          (err, _) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully set bucket policy for bucket 'public'");
            }
          }
        );
        console.log("Successfully Initialized S3 bucket 'public'");
      }
    }
  );
}

export async function uploadSubmission(
  course,
  assignment,
  submission,
  filename
) {
  // getSubmissionUpload("f321f12ff21f", "f12r32314124", "f21321f23f2f" ) => presigned url

  // TODO if one of these parameters are missing throw error
  return getPresignedUpload(
    "rtest",
    [course, assignment, submission, filename].join("/")
  );
}

export async function getPresignedUpload(bucket, key) {
  const url = s3.getSignedUrl("putObject", {
    Bucket: bucket,
    Key: key,
    Expires: 1000,
    // Conditions: [["content-length-range", 0, 1000000]],
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

export const getFileMetadata = async (bucket, key) => {
  return await s3.headObject({ Bucket: bucket, Key: key }).promise();
};
