const fspromises = require('fs/promises');
const { resolve } = require('path');
const path = require('path');
const tickerdir = path.resolve(__dirname, 'ticker');

const sleep = (duration) => new Promise((resolve)=>setTimeout(resolve, 3));

async function bulk(file_name){
    try{
    
        const han = await fspromises.readFile(path.join(tickerdir, `${file_name}.txt`), 'utf8');
        const nh = han.split('\n');
        const nhs = nh
                    .map((lines) => lines.split('\t')[0])
                    .filter((ticker) => !ticker.includes('.') );
        //console.log(nhs);
        
        for (let i = 0; i < nhs.length; i++) {
            await sleep(3000)
        }

    }catch(error){
        console.log(error);
    }
}

bulk('AMEX');