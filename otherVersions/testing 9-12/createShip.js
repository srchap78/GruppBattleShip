//I believe this works fine
/*board= array's name -- axis = "y" for vertical layout otherwise horizontal layout -- shipSize = whatever size ship you want as long it will fit in the array -- 
shipType = whatver you want to have represent a ship.. "A" or "B" for example .. could declare variable 'battleship = "A"'
 then just use battleship for shipType. !!!Would it be better to have each ship type as its own array already? battleShip = ["A", "A", "A", "A"]!!!*/
function createShip(board, axis, shipSize, shipType) {
    if (axis === "y") {
        //for vertical ships (descending)
        for (i = 0; i < shipSize; i++) {
            board[yPos + i][xPos] = shipType;
        }
    }
    else {
        //for horizontal (going to the right)
        for (i = 0; i < shipSize; i++) {
            board[yPos][xPos + i] = shipType;
        }
    }

    console.log(board);
}
