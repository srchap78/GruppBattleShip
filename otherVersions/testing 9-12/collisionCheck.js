//!!!WILL PLACE OUTSIDE OF THE ARRAY!!!FIX!!!

function collisionCheck(board, axis, shipSize, shipType) {  //maybe instead of shipSize it is better to have shipType and have shipType declared already with a specified size. battleShip = 5, submarine = 3, etc. 
    let collision = true; //sets collision to true to initialize the while loop
    let numTry = 0;
    while (collision === true) {
        xPos = Math.floor(Math.random() * (board.length - shipSize));
        yPos = Math.floor(Math.random() * (board.length - shipSize));

        collision = false; //sets collision to false so the loop doesn't start again as long as all of the coordinates are valid
        numTry++;
        /*loop to check if there is an "A", "B" or "C" at either coordinates. if the first coordinate has "A", "B" or "C", the whole while loop starts
        again, if the first coordinates passes but the second doesn't... the loop restarts. when all coordinates pass,
        the loop finishes.*/

        for (x = 0; x < board.length; x++) {
            for (y = 0; y < board[x].length; y++) {
                if (board[yPos + x][xPos] === ships[y].shipSymbol || board[yPos][xPos + x] === ships[y].shipSymbol) {
                    collision = true //Collision detected, variable set back to true to reinitialize the loop
                    break; //the loo
                }
            }
        }

        //collision = true //Collision detected, variable set back to true to reinitialize the loop
        //break; //the loop is broken because a collision was detected

    }
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

    document.write(`Try ${numTry}: xPos=${xPos} yPos=${yPos} Ship Size:${shipSize}<br>`);
}

//document.write(`Try ${numTry}: xPos=${xPos} yPos=${yPos} Ship Size:${shipSize}<br>`);





/*for testing only, put ship placement in its own function!!
    will place a new ship(vertically placed) "D" which is shipSize long*/
//for (i = 0; i < shipSize; i++) {
//   board[yPos + i][xPos] = "D";
//}

//console.log(`xPos:${xPos}  yPos:${yPos}`);
//console.log(board);


