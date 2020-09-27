const axios = require('axios');
const { cloud_url } = require('./config');


const testAuthorize = async () => {
    const payload = {
        fileName: 'something.wav',
    };

    const res = await axios.post(cloud_url, payload);
    console.log(res);
};

testAuthorize();