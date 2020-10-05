import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

//fill in credential
const s3 = new AWS.S3({
   endpoint: process.env.STORAGE_ENDPOINT,   // Put you region
   accessKeyId: process.env.STORAGE_ACCESS_KEY,       //accessKeyId
   secretAccessKey: process.env.STORAGE_SECRET_KEY,
//    Bucket: 'rtest',            //bucket name
//    signatureVersion: 'v4',
//    region: 'ap-south-1'           //region
});


//get presigned url for upload
async function getPresignedUpload(bucket, key) {
    const url = await s3
      .getSignedUrl('putObject', {
        Bucket: bucket,
        Key: key,
        Expires: 1000,
      })
      .promise();
    return url;
}
//get presigned url for download
async function getPresignedDownload(bucket, key) {
    const url = await s3
      .getSignedUrl('getObject', {
        Bucket: bucket,
        Key: key,
        Expires: 1000,
      })
      .promise();
    return url;
  }

  export default Presignedurl;