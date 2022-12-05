const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

let score = 0;

data.split(/\r?\n/).forEach(line =>  {
    groups = line.split(',');
    internal1 = groups[0].split('-');
    internal2 = groups[1].split('-');

    let internal1_range = range(parseInt(internal1[1]) - parseInt(internal1[0]) + 1, parseInt(internal1[0]));
    let internal2_range = range(parseInt(internal2[1]) - parseInt(internal2[0]) + 1, parseInt(internal2[0]));

    let oneintwo = internal1_range.every(x => internal2_range.includes(x));
    let twoinone = internal2_range.every(x => internal1_range.includes(x));

    if(oneintwo || twoinone) {
        score += 1;
    }

});

console.log(score);


score = 0;

data.split(/\r?\n/).forEach(line =>  {
    groups = line.split(',');
    internal1 = groups[0].split('-');
    internal2 = groups[1].split('-');

    let internal1_range = range(parseInt(internal1[1]) - parseInt(internal1[0]) + 1, parseInt(internal1[0]));
    let internal2_range = range(parseInt(internal2[1]) - parseInt(internal2[0]) + 1, parseInt(internal2[0]));

    let oneintwo = internal1_range.some(x => internal2_range.includes(x));
    let twoinone = internal2_range.some(x => internal1_range.includes(x));

    if(oneintwo || twoinone) {
        score += 1;
    }

});

console.log(score);