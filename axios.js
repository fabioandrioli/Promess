const axios = require('axios');

axios("http://echo.jsontest.com/key/value/one/two").then(res => {
    console.log(res.data)
}).catch(err => console.log(err))