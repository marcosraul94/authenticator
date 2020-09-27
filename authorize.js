const { Storage } = require('@google-cloud/storage');
const { bucketName, urlExpirationMs } = require('./config');


const authorize = async (req, res) => {
    const { fileName } = req && req.body;
    if (!fileName) res.send({'error': `Not valid name: ${fileName}`});

    const bucket = new Storage().bucket(bucketName);
    const file = bucket.file(fileName);
    const options = {
        version: 'v4',
        action: 'write',
        expires: urlExpirationMs,
    };

    try{
        const signedUrl = await file.getSignedUrl(options);
        return res.send({'url': signedUrl});
    }
    catch (e) {
        res.send({'error': e});
    }
};

module.exports = authorize;
