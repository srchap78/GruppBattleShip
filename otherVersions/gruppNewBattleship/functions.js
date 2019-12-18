function createBoard(board, rows, columns) {
    for (i = 0; i < rows; i++) {  //this loop will run however many times the value of rows
        board.push([i])  //to push a new array in the array however many times it loops!! 
        for (c = 0; c < columns; c++) { //will create objects inside the array(s) for as many times the value of columns
            board[i][c] = 0 //places the value "o" at the specified coordinate(s)
        }
    }
}

function placeShip(board, axis, shipSize) {

    let collision = true; //sets collision to true to initialize the while loop
    
    while (collision === true) {
        let tries = 1;
        xPos = Math.floor(Math.random() * (board.length - shipSize))
        yPos = Math.floor(Math.random() * (board.length - shipSize))
        collision = false;

        for (y = 0; y < shipSize; y++) {

            if (board[yPos + y][xPos] === 1) {
                collision = true;
                console.log(`Y coord Collision detected at X:${xPos} Y:${yPos}`)
                break;
            }
            for (x = 0; x < shipSize; x++) {
                if (board[yPos][xPos + x] === 1) {
                    collision = true;
                    console.log(`X coord Collision detected at X:${xPos} Y:${yPos}`)
                    break;
                }
            }
console.log(`retrying because x:${xPos} y:${yPos} does not work for ship size:${shipSize}`)
        }
        tries++
        console.log(`end of while loop shiplength:${shipSize} on ${axis}axis starts at x:${xPos} y:${yPos} it took ${tries} tries`)
    }//end of while loop

    if (axis === "y") {
        //for vertical ships (descending)
        for (i = 0; i < shipSize; i++) {
            board[yPos + i][xPos] = 1;
        }

    }

    else if (axis === "x") {
        //for horizontal (going to the right)
        for (i = 0; i < shipSize; i++) {
            board[yPos][xPos + i] = 1;
        }
    }
}