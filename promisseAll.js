const axios = require('axios');

//ele retorna um array de promessa, como só tinha promise, ele tem apenas uma posicao no array a zero
//No catch, se algum deles tiver errado, ele captura o erro parando todas as chamadas.
// só esexcuta se todos tiverem certo

Promise.all([  
    axios("http://echo.jsontest.com/key/value/one/two"),
]).then(res => console.log(res[0].data))