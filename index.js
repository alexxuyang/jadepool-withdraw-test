require('log-timestamp');
const axios = require('axios')

const sleep = (i) => new Promise((res, rej) => setTimeout(res, i));

let url = 'http://43.153.170.187:7001/api/v2/s/wallets/hsa10/tokens/ETH/withdraw?appid=sudo';

async function main () {
    for(let i = 1;i <= 10; i++) {
        result = await withdraw();

        let code = result.data.code;

        if(code != 0) {
            console.log(i, code);
        } else if(i % 5 == 1) {
            console.log(i, code);
        }

        await sleep(1);
    }
}

async function withdraw() {
    var data = {
        to: "0xBD3d736107744B3429081597b8A920CB69cad541",
        value: "0.0000001",
        sequence: new Date().getTime()
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
