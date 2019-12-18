function shootShip(board) {

    while (shipsA > 0 && shipsB > 0) { //while there are more than 0 ships the loop will start/continue
        let y = prompt("Player 1:Enter your y coordinate (0-4)");
        let x = prompt("Player 1:Enter your x coordinate (0-4)");

        if (board[y][x] !== "A") { //if the player guesses incorrectly, they try again
            console.log("You missed! Wait for your next turn player one")
        } else if (board[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
            console.log("Hit! You sunk a ship player one!");
            shipsA--;
            if (shipsA == 0) {
                break;
            }
            console.log(`There are ${shipsA} ships remaining for player one!`);

        }
        y = prompt("Player 2:Enter your y coordinate (0-4)");
        x = prompt("Player 2:Enter your x coordinate (0-4)");
        if (board[y][x] !== "A") { //if the player guesses incorrectly, they try again
            console.log("You missed! Wait for your next turn player two")
        } else if (board[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
            console.log("Hit! You sunk a ship player two!");
            shipsB--;
            if (shipsB == 0) {
                break;
            }
            console.log(`There are ${shipsB} ships remaining for player two!`);
        }
    }
}