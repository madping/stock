const fspromises = require('fs/promises');
const { resolve } = require('path');
const path = require('path');
const tickerdir = path.resolve(__dirname, 'ticker');

//const sleep = (duration) => new Promise((resolve)=>setTimeout(resolve, 3));

const markets = ['AMEX', 'NASDAQ', 'NYSE']

async function parseTickers(market){
    const han = await fspromises.readFile(path.join(tickerdir, `${market}.txt`), 'utf8');
    const nh = han.split('\n');
    const nhs = nh
      .map((lines) => lines.split('\t')[0])
      .filter((ticker) => !ticker.includes('.'));
    return nhs;
}

async function bulk(){
    const tickersGroup = await Promise.all(markets.map(parseTickers));
    const tickers = [].concat(...tickersGroup);
    console.log(tickers.length);   
     //   for (let i = 0; i < nhs.length; i++) {
     //       await sleep(3000)
       
}

bulk('AMEX');