const axios = require('axios');
const { localUrl } = require('./config');


const testAuthorize = async () => {
    const payload = {
        fileName: 'something.wav',
    };

    const res = await axios.post(localUrl, payload);
    console.log(res);
};

testAuthorize();