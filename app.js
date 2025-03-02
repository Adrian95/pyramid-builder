const readline = require('readline');

// Create an interface for reading data from the standard input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter a character
rl.question('Enter the character: ', (char) => {
    // Ask the user to enter the count (number of rows)
    rl.question('Enter the count: ', (cnt) => {
        // Ask the user if the pyramid should be inverted
        rl.question('Inverted? (yes/no): ', (inv) => {
            // Store the character entered by the user
            let character = char;
            // Convert the count entered by the user to an integer
            let count = parseInt(cnt);
            // Determine if the pyramid should be inverted based on user input
            let inverted = inv.toLowerCase() === 'yes';
            // Initialize an array to hold each row of the pyramid
            let rows = [];

            // Function to create a row of the pyramid
            function padRow(rowNumber, rowCount) {
                // Create a row with spaces and the character repeated
                return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
            }

            // Loop to generate each row of the pyramid
            for (let i = 1; i <= count; i++) {
                if (inverted) {
                    // If inverted, add the row to the beginning of the array
                    rows.unshift(padRow(i, count));
                } else {
                    // If not inverted, add the row to the end of the array
                    rows.push(padRow(i, count));
                }
            }

            // Initialize a string to hold the final result
            let result = "";

            // Concatenate each row into the result string
            for (const row of rows) {
                result = result + row + "\n";
            }

            // Print the final pyramid
            console.log(result);
            // Close the readline interface
            rl.close();
        });
    });
});