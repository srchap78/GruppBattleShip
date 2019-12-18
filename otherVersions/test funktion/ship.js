function shipA(playerBoard) {

    /* this gives a random starting index between 0 and 2
    so our 3 coordinate ship will fit within the array
    */
    let xPos = Math.floor(Math.random() * 3);
    document.write("P1 Ship A: x:" + xPos + " ")
    let yPos = Math.floor(Math.random() * 3);
    document.write("y:" + yPos)

    /*this places ship "A" at 3 coordinates*/
    for (i = 0; i < 3; i++) {
        playerBoard[yPos][xPos + i] = "A";
    }
}

function shipB(playerBoard) {
    //ship B for player 1
    let collision = true; //sets collision to true to initialize the while loop
    while (collision === true) {
        xPos = Math.floor(Math.random() * 4);
        document.write("<br> Ship B: x:" + xPos + " ")
        yPos = Math.floor(Math.random() * 4);
        document.write("y:" + yPos);
        collision = false; //sets collision to false so the loop completes as long as all of the coordinates are valid

        /*loop to check if there is an "A" at either coordinates. if the first coordinate has "A", the whole while loop starts
        again, if the first coordinates passes but the second doesn't... the loop restarts. when both coordinates pass,
        the loop finishes.*/
        for (i = 0; i < 2; i++) {
            if (playerBoard[yPos + i][xPos] === "A") {
                collision = true
                break;
            }
        }
    }

/*Now we place ship B in the array since we know the coordinates are available and won't overlap another ship*/
for (i = 0; i < 2; i++) {
    playerBoard[yPos + i][xPos] = "B";
}
}

function shipC(playerBoard) {
    //ship c (1 coordinate), player 1

    collision = true; //sets collision to true to initialize the while loop
    while (collision === true) {
        xPos = Math.floor(Math.random() * 5);
        document.write("<br> Ship C: x:" + xPos + " ")
        yPos = Math.floor(Math.random() * 5);
        document.write("y:" + yPos);
        collision = false; //sets collision to false so the loop completes as long as all of the coordinates are valid

        /*loop to check if there is an "A" at either coordinates. if the first coordinate has "A", the whole while loop starts
        again, if the first coordinates passes but the second doesn't... the loop restarts. when both coordinates pass,
        the loop finishes.*/
        for (i = 0; i < 1; i++) {
            if (playerBoard[yPos + i][xPos] === "A" || "B") {
                collision = true
                break;
            }
        }
    }

    /*Now we place ship C in the array since we know the coordinates are available and won't overlap another ship*/

    for (i = 0; i < 1; i++) {
        playerBoard[yPos + i][xPos] = "C";
    }
}