const readline = require("readline");
const MarkovChain = require('./src/model/MarkovChain');
const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
cmd.question('Supply text to generate Markov Chain: ',(txt)=>{
    const chain = new MarkovChain(txt);
    const result = chain.generate();
    console.log('\n');
    console.log('Markov Chain: ');
    console.log(result);
    cmd.close();
});