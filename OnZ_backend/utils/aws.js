const {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
  paginateListObjectsV2,
  GetObjectCommand,
} =  require("@aws-sdk/client-s3");

const s3Client = new S3Client({});

// Create an Amazon S3 bucket. The epoch timestamp is appended
// to the name to make it unique.
const bucketName = `test-bucket-${Date.now()}`;