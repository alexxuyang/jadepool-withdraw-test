require('log-timestamp');
const axios = require('axios')

const sleep = (i) => new Promise((res, rej) => setTimeout(res, i * 1000));

let url = 'http://hub.jadepool.io:7001/api/v2/s/wallets/alex_test/tokens/ETH/withdraw?appid=sudo';

async function main () {
    for(let i = 1;i <= 100 - 4; i++) {
        result = await withdraw();
        console.log(result.data.code);
        await sleep(1);
    }
}

async function withdraw() {
    var data = {
        to: "0xBD3d736107744B3429081597b8A920CB69cad541",
        value: "0.0000001",
        sequence: new Date().getTime(),
        maxFeePrice: 2e9
      };
    
    var config = {
        method: 'post',
        url,
        headers: { 
            'Content-Type': 'application/json'
        },
        data: {data}
    };
    
    return await axios(config);
}

main().catch(console.error).finally(() => process.exit());
