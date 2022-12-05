/*
    A -> Rock
    B -> Paper
    C -> Scissors

    X -> Rock       -> 1
    Y -> Paper      -> 2
    Z -> Scissors   -> 3

    Lost            -> 0
    Draw            -> 3
    Won             -> 6
*/

const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');

let points = 0;

data.split(/\r?\n/).forEach(line =>  {
    let play = line.split(' ');
    if(play[0] === 'A'){    // Rock
        if(play[1] === 'X'){
            points += 1;    // Played Rock
            points += 3;    // Draw
        }else if(play[1] === 'Y'){
            points += 2;    // Played Paper
            points += 6;    // Won
        }else if(play[1] === 'Z'){
            points += 3;    // Played Scissors
            points += 0;    // Lost
        }
    }else if(play[0] === 'B'){  // Paper
        if(play[1] === 'X'){
            points += 1;    // Played Rock
            points += 0;    // Lost
        }else if(play[1] === 'Y'){
            points += 2;    // Played Paper
            points += 3;    // Draw
        }else if(play[1] === 'Z'){
            points += 3;    // Played Scissors
            points += 6;    // Won
        }
    }else if(play[0] === 'C'){  // Scissors
        if(play[1] === 'X'){
            points += 1;    // Played Rock
            points += 6;    // Won
        }else if(play[1] === 'Y'){
            points += 2;    // Played Paper
            points += 0;    // Lost
        }else if(play[1] === 'Z'){
            points += 3;    // Played Scissors
            points += 3;    // Draw
        }
    }
});

console.log(points);

/*
    Part 2

    A -> Rock
    B -> Paper
    C -> Scissors

    Rock        -> 1
    Paper       -> 2
    Scissors    -> 3

    X -> Lost   -> 0
    Y -> Draw   -> 3
    Z -> Won    -> 6
*/

points = 0;

data.split(/\r?\n/).forEach(line =>  {
    let play = line.split(' ');
    if(play[0] === 'A'){        // Rock
        if(play[1] === 'X'){        // Lost
            points += 3;                // Played Scissors
            points += 0;
        }else if(play[1] === 'Y'){  // Draw
            points += 1;                // Played Rock
            points += 3;
        }else if(play[1] === 'Z'){  // Won
            points += 2;                // Played Paper
            points += 6;
        }
    }else if(play[0] === 'B'){  // Paper
        if(play[1] === 'X'){        // Lost
            points += 1;                // Played Rock
            points += 0;
        }else if(play[1] === 'Y'){  // Draw
            points += 2;                // Played Paper
            points += 3;
        }else if(play[1] === 'Z'){  // Won
            points += 3;                // Played Scissors
            points += 6;
        }
    }else if(play[0] === 'C'){  // Scissors
        if(play[1] === 'X'){        // Lost
            points += 2;                // Played Paper
            points += 0;
        }else if(play[1] === 'Y'){  // Draw
            points += 3;                // Played Scissors
            points += 3;
        }else if(play[1] === 'Z'){  // Won
            points += 1;                // Played Rock
            points += 6;
        }
    }
});

console.log(points);