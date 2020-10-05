import React from 'react';
//Move the code to backend side
const AWS = require("aws-sdk");
//fill in credential
const s3 = new AWS.S3({
   endpoint: 's3-ap-south-1.amazonaws.com',   // Put you region
   accessKeyId: '',       //accessKeyId
   secretAccessKey: '',   //secretaccessKeyId
   Bucket: '',            //bucket name
   signatureVersion: 'v4',
   region: 'ap-south-1'           //region
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