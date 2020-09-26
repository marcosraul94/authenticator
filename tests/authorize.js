const axios = require('axios');
const { url } = require('./config');


const testAuthorize = async () => {
    const payload = {
        fileName: 'something.wav',
    };

    const res = await axios.post(url, payload);
    console.log(res);
};

testAuthorize();