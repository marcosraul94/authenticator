const bucketName = 'bucket_of_cositi';
const urlExpirationMs = Date.now() + (1000 * 60 * 60); // an hour
const appPath = __dirname;


module.exports = {
    bucketName,
    urlExpirationMs,
    appPath,
}
