import fs from 'fs';

const first = fs.readFileSync('./content/first.txt','utf8');
const second = fs.readFileSync('./content/second.txt','utf8');

console.log(first, second);

fs.writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag:'a'}
);