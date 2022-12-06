const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf-8');

let score = 0;

data.split(/\r?\n/).forEach(line =>  {
    let letters = line.split('');
    for (let i = 3; i < letters.length - 1; i++) {
        if ([...new Set(letters.slice(i - 3, i+1))].length === 4) {
            score = i+1;
            break;
        }
    }
});

console.log(score);
score = 0;

data.split(/\r?\n/).forEach(line =>  {
    let letters = line.split('');
    for (let i = 13; i < letters.length - 1; i++) {
        if ([...new Set(letters.slice(i - 13, i+1))].length === 14) {
            score = i+1;
            break;
        }
    }
});

console.log(score);