function placeShip(board, axis, shipSize, shipSymbol) {

    let collision = true; //sets collision to true to initialize the while loop

    while (collision === true) {
        let tries = 1;
        xPos = Math.floor(Math.random() * (board.length - shipSize +1));
        yPos = Math.floor(Math.random() * (board.length - shipSize +1));
        collision = false;

        for (y = 0; y < shipSize; y++) {

            if (board[yPos + y][xPos] === "A" || board[yPos + y][xPos] === "B" || board[yPos + y][xPos] === "C" || board[yPos + y][xPos] === "D" || board[yPos + y][xPos] === "E" || board[yPos + y][xPos] === "F") {
                collision = true;
                console.log(`Y coord Collision detected at X:${xPos} Y:${yPos}`);
                break;
            }
            for (x = 0; x < shipSize; x++) {
                if (board[yPos][xPos + x] === "A" || board[yPos][xPos + x] === "B" || board[yPos][xPos + x] === "C" || board[yPos][xPos + x] === "D" || board[yPos][xPos + x] === "E"|| board[yPos][xPos + x] === "F") {
                    collision = true;
                    console.log(`X coord Collision detected at X:${xPos} Y:${yPos}`);
                    break;
                }
            }
            console.log(`retrying because x:${xPos} y:${yPos} does not work for ship size:${shipSize}`);
        }
        tries++;
        console.log(`end of while loop shiplength:${shipSize} on ${axis}axis starts at x:${xPos} y:${yPos} it took ${tries} tries`);
    }//end of while loop

    if (axis === "y") {
        //for vertical ships (descending)
        for (i = 0; i < shipSize; i++) {
            board[yPos + i][xPos] = shipSymbol;
        }

    }

    else if (axis === "x") {
        //for horizontal (going to the right)
        for (i = 0; i < shipSize; i++) {
            board[yPos][xPos + i] = shipSymbol;
        }
    }
}