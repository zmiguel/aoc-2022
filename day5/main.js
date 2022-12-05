const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf-8');

/* container array
                [B]     [L]     [S]
        [Q] [J] [C]     [W]     [F]
    [F] [T] [B] [D]     [P]     [P]
    [S] [J] [Z] [T]     [B] [C] [H]
    [L] [H] [H] [Z] [G] [Z] [G] [R]
[R] [H] [D] [R] [F] [C] [V] [Q] [T]
[C] [J] [M] [G] [P] [H] [N] [J] [D]
[H] [B] [R] [S] [R] [T] [S] [R] [L]
 1   2   3   4   5   6   7   8   9
*/

let containers = [
    ['H', 'C', 'R'],                            // 1
    ['B', 'J', 'H', 'L', 'S', 'F'],             // 2
    ['R', 'M', 'D', 'H', 'J', 'T', 'Q'],        // 3
    ['S', 'G', 'R', 'H', 'Z', 'B', 'J'],        // 4
    ['R', 'P', 'F', 'Z', 'T', 'D', 'C', 'B'],   // 5
    ['T', 'H', 'C', 'G'],                       // 6
    ['S', 'N', 'V', 'Z', 'B', 'P', 'W', 'L'],   // 7
    ['R', 'J', 'Q', 'G', 'C'],                  // 8
    ['L', 'D', 'T', 'R', 'H', 'P', 'F', 'S'],   // 9
];

data.split(/\r?\n/).forEach(line =>  {
    let words = line.split(' ');
    let num = parseInt(words[1]);
    let from = parseInt(words[3])-1;
    let to = parseInt(words[5])-1;

    for(let i = 0; i < num; i++) {
        containers[to].push(containers[from].pop());
    }
});

let output = '';
containers.forEach(container => {
    output += container.slice(-1);
});

console.log(containers);
console.log(output);

containers = [
    ['H', 'C', 'R'],                            // 1
    ['B', 'J', 'H', 'L', 'S', 'F'],             // 2
    ['R', 'M', 'D', 'H', 'J', 'T', 'Q'],        // 3
    ['S', 'G', 'R', 'H', 'Z', 'B', 'J'],        // 4
    ['R', 'P', 'F', 'Z', 'T', 'D', 'C', 'B'],   // 5
    ['T', 'H', 'C', 'G'],                       // 6
    ['S', 'N', 'V', 'Z', 'B', 'P', 'W', 'L'],   // 7
    ['R', 'J', 'Q', 'G', 'C'],                  // 8
    ['L', 'D', 'T', 'R', 'H', 'P', 'F', 'S'],   // 9
];

// same as before but move them in the same order
data.split(/\r?\n/).forEach(line =>  {
    let words = line.split(' ');
    let num = parseInt(words[1]);
    let from = parseInt(words[3])-1;
    let to = parseInt(words[5])-1;

    let elements = containers[from].splice(-num);
    containers[to] = containers[to].concat(elements);
});

output = '';
containers.forEach(container => {
    output += container.slice(-1);
});

console.log(containers);
console.log(output);