const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');

let biggest = 0;
let secondBiggest = 0;
let thirdBiggest = 0;
let temp = 0;

// part 1

data.split(/\r?\n/).forEach(line =>  {
    if(line !== '') {
        temp += parseInt(line);
    }else if(line === ''){
        if(temp > biggest){
            biggest = temp;
        }
        temp = 0;
    }
});
console.log(biggest);

// part 2

data.split(/\r?\n/).forEach(line =>  {
    if(line !== '') {
        temp += parseInt(line);
    }else if(line === ''){
        if(temp > biggest){
            thirdBiggest = secondBiggest;
            secondBiggest = biggest;
            biggest = temp;
        }else if(temp > secondBiggest && temp < biggest){
            thirdBiggest = secondBiggest;
            secondBiggest = temp;
        }else if(temp > thirdBiggest && temp < secondBiggest){
            thirdBiggest = temp;
        }
        temp = 0;
    }
});
console.log(biggest + secondBiggest + thirdBiggest);