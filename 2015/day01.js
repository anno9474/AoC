const fs = require('fs');

// Read input from file
fs.readFile('input01.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let floor = 0;
    let basementPosition = -1;

    for (let i = 0; i < data.length; i++) {
        if (data[i] === '(') {
            floor += 1; // Move up
        }else if ( data[i] === ')'){
            floor -= 1; // Move down
        }

        // Check for basement
        if (floor === -1 && basementPosition === -1) {
            basementPosition = i + 1;
        }
    }
    console.log(`Santa ends up on floor: ${floor} and the basement is at ${basementPosition}`);
});