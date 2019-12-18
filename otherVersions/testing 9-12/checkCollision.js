//Will overlap ships still?!? Don't know why this broke
function checkCollision(board, axis, shipSize, shipType) {

    let collision = true; //sets collision to true to initialize the while loop
    
    while (collision === true) {
        xPos = Math.floor(Math.random() * (board.length - shipSize)); //so ship will never be out of the array
        yPos = Math.floor(Math.random() * (board.length - shipSize));

        collision = false; //sets collision to false so the loop doesn't start again as long as all of the coordinates are valid

        for (i = 0; i < shipSize; i++) {

            for (j = 0; j < ships.length; j++) {
                if (board[yPos + i][xPos] === ships[j].shipSymbol || board[yPos][xPos + i] === ships[j].shipSymbol)
                    collision = true //Collision detected, variable set back to true to reinitialize the loop
                break; //the loop is broken because a collision was detected

            }
        }

        if (collision === true) {
            break;
        }

    }//end of while loop

    //now the ship will be placed
    if (axis === "y") {
        //for vertical ships (descending)
        for (i = 0; i < shipSize; i++) {
            board[yPos + i][xPos] = shipType;
        }

    }
    
    else if (axis === "x") {
        //for horizontal (going to the right)
        for (i = 0; i < shipSize; i++) {
            board[yPos][xPos + i] = shipType;
        }
    }



}

