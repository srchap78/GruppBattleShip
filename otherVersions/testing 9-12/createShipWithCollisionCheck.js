//Will overlap ships still?!? Don't know why this broke
function createShipWithCollisionCheck(board, axis, shipSize, shipType) {

    let collision = true; //sets collision to true to initialize the while loop
    let numTry = 0; //for testing and curiousity's sake
    while (collision === true) {
        xPos = Math.floor(Math.random() * (board.length - shipSize)); //so ship will never be out of the array
        yPos = Math.floor(Math.random() * (board.length - shipSize));

        collision = false; //sets collision to false so the loop doesn't start again as long as all of the coordinates are valid

        numTry++;//for testing and curiousity's sake

        /*loop to check if there is ships[].shipSymbol at either coordinates and makes sure coordinates are in the 2D array. if the first coordinate has "A", "B" or "C", the whole while loop starts
        again, if the first coordinates passes but the second doesn't... the loop restarts. when all coordinates pass,
        the loop finishes.*/
        /* for (i = 0; i < shipSize; i++) {
            if (board[yPos +i][xPos] === battleShip.shipSymbol || board[yPos+i][xPos] ===  patrolBoat.shipSymbol || board[yPos+i][xPos] ===  uBoat.shipSymbol || board[yPos+i][xPos] ===  destroyer.shipSymbol || board[yPos+i][xPos] ===  carrier.shipSymbol) //|| board[yPos][xPos + i] === battleShip.shipSymbol || board[yPos][xPos + i] === patrolBoat.shipSymbol || board[yPos][xPos + i] === uBoat.shipSymbol || board[yPos][xPos + i] === destroyer.shipSymbol || board[yPos][xPos + i] === carrier.shipSymbol) {
                collision = true //Collision detected, variable set back to true to reinitialize the loop
                break; //the loop is broken because a collision was detected
            } */
        for (i = 0; i < shipSize; i++) {
            // if (board[yPos + i][xPos] === battleShip.shipSymbol || board[yPos + i][xPos] === patrolBoat.shipSymbol || board[yPos + i][xPos] === uBoat.shipSymbol || board[yPos + i][xPos] === destroyer.shipSymbol || board[yPos + i][xPos] === carrier.shipSymbol)  //|| board[yPos][xPos + i] === battleShip.shipSymbol || board[yPos][xPos + i] === patrolBoat.shipSymbol || board[yPos][xPos + i] === uBoat.shipSymbol || board[yPos][xPos + i] === destroyer.shipSymbol || board[yPos][xPos + i] === carrier.shipSymbol) {
            for (j = 0; j < ships.length; j++) {
                if (board[yPos + i][xPos] === ships[j].shipSymbol || board[yPos][xPos + i] === ships[j].shipSymbol) {
                collision = true //Collision detected, variable set back to true to reinitialize the loop
                break; //the loop is broken because a collision was detected
                }
            }
            /* for (i = 0; i < shipSize; i++) {
                for (j = 0; j < ships.length; j++) {
                    if (board[yPos][xPos + i] === ships[j].shipSymbol)
                    collision = true;
                    break;

                }
                //if (board[yPos][xPos + i] === battleShip.shipSymbol || board[yPos][xPos + i] === patrolBoat.shipSymbol || board[yPos][xPos + i] === uBoat.shipSymbol || board[yPos][xPos + i] === destroyer.shipSymbol || board[yPos][xPos + i] === carrier.shipSymbol)
                //collision = true;
                // break;
            } */

            document.write(`Try ${numTry} for ${shipType} with Ship Size ${shipSize} on ${axis} axis: xPos=${xPos} yPos=${yPos} <br>`); //for testing and curiousity's sake
        }
        if (collision === true){
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

    //console.log(board); //for testing and curiousity's sake

}

