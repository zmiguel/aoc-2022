const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');

//priority list for all letters in the alphabet
let priorities = {
    'a' : 1,
    'b' : 2,
    'c' : 3,
    'd' : 4,
    'e' : 5,
    'f' : 6,
    'g' : 7,
    'h' : 8,
    'i' : 9,
    'j' : 10,
    'k' : 11,
    'l' : 12,
    'm' : 13,
    'n' : 14,
    'o' : 15,
    'p' : 16,
    'q' : 17,
    'r' : 18,
    's' : 19,
    't' : 20,
    'u' : 21,
    'v' : 22,
    'w' : 23,
    'x' : 24,
    'y' : 25,
    'z' : 26,
    'A' : 27,
    'B' : 28,
    'C' : 29,
    'D' : 30,
    'E' : 31,
    'F' : 32,
    'G' : 33,
    'H' : 34,
    'I' : 35,
    'J' : 36,
    'K' : 37,
    'L' : 38,
    'M' : 39,
    'N' : 40,
    'O' : 41,
    'P' : 42,
    'Q' : 43,
    'R' : 44,
    'S' : 45,
    'T' : 46,
    'U' : 47,
    'V' : 48,
    'W' : 49,
    'X' : 50,
    'Y' : 51,
    'Z' : 52
};

let score = 0;

data.split(/\r?\n/).forEach(line =>  {
    // spit line in half
    let part1_str = line.substring(0, line.length / 2);
    let part2_str = line.substring(line.length / 2, line.length);
    part1 = part1_str.split('');
    part2 = part2_str.split('');
    for(let i = 0; i < part1.length; i++) {
        if(part2.includes(part1[i])) {
            // if letter is in both parts
            score += priorities[part1[i]];
            break;
        }
    }
});

console.log(score);

lines = data.split(/\r?\n/);
score = 0;

for(let i = 0; i < lines.length; i+=3) {
    // for each group of 3 lines
    let line1_str = lines[i];
    let line2_str = lines[i+1];
    let line3_str = lines[i+2];
    let line1 = line1_str.split('');
    let line2 = line2_str.split('');
    let line3 = line3_str.split('');
    for(let j = 0; j < line1.length; j++) {
        if(line2.includes(line1[j]) && line3.includes(line1[j])) {
            // if letter is in all 3 lines
            score += priorities[line1[j]];
            break;
        }
    }
}

console.log(score);