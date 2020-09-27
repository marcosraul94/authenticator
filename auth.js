const path = require('path');
const { appPath } = require('./config');


const credentialsPath = path.join(appPath, 'credentials.json');

class GCPAuth {
    constructor() {
        if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) 
        process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;
    }
}


module.exports = GCPAuth;
