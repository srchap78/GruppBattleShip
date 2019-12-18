
let playerOneBoard = [         //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 

let playerTwoBoard = [         //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 

/* this gives a random starting index between 0 and 2
so our 3 coordinate ship will fit within the array
*/
let xPos = Math.floor(Math.random() * 3);
document.write("P1 Ship A: x:" + xPos + " ")
let yPos = Math.floor(Math.random() * 3);
document.write("y:" + yPos)

/*this place ship "A" at 3 coordinates*/
for (i = 0; i < 3; i++) {
    playerOneBoard[yPos][xPos + i] = "A";
}

/* this gives a random starting index between 0 and 2
so our 3 coordinate ship will fit within the array
*/
xPos = Math.floor(Math.random() * 3);
document.write("P2 Ship A: x:" + xPos + " ")
yPos = Math.floor(Math.random() * 3);
document.write("y:" + yPos)

/*this place ship "A" at 3 coordinates*/
for (i = 0; i < 3; i++) {
    playerTwoBoard[yPos][xPos + i] = "A";
}
console.log("Player 1 Board");
console.log(playerOneBoard);
console.log("Player 2 Board");
console.log(playerTwoBoard);

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
        if (playerOneBoard[yPos + i][xPos] === "A") {
            collision = true
            break;
        }
    }
}
/*Now we place ship B in the array since we know the coordinates are available and won't overlap another ship*/
for (i = 0; i < 2; i++) {
    playerOneBoard[yPos + i][xPos] = "B";
}

//Ship B for player 2
collision = true; //sets collision to true to initialize the while loop
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
        if (playerTwoBoard[yPos + i][xPos] === "A") {
            collision = true
            break;
        }
    }
}
/*Now we place ship B in the array since we know the coordinates are available and won't overlap another ship*/
for (i = 0; i < 2; i++) {
    playerTwoBoard[yPos + i][xPos] = "B";
}
//ship c
/*
collision = true; //sets collision to true to initialize the while loop
while (collision === true) {
    xPos = Math.floor(Math.random() * 4);
    document.write("<br> Ship B: x:" + xPos + " ")
    yPos = Math.floor(Math.random() * 4);
    document.write("y:" + yPos);
    collision = false; //sets collision to false so the loop completes as long as all of the coordinates are valid

    /*loop to check if there is an "A" at either coordinates. if the first coordinate has "A", the whole while loop starts
    again, if the first coordinates passes but the second doesn't... the loop restarts. when both coordinates pass,
    the loop finishes.
    for (i = 0; i < 2; i++) {
        if (playerTwoBoard[yPos + i][xPos] === "A") {
            collision = true
            break;
        }
    }
}
*/
/*Now we place ship B in the array since we know the coordinates are available and won't overlap another ship*/
/*
for (i = 0; i < 2; i++) {
    playerTwoBoard[yPos + i][xPos] = "B";
}
*/

let x;
let y;
let shipsA = 3; //sets player ones's ships to 3
let shipsB = 3; //sets player two's ships to 3
console.log(`There are ${shipsA} ships for player one to find!`);
console.log(`There are ${shipsB} ships for player two to find!`);

while (shipsA > 0 && shipsB > 0) { //while there are more than 0 ships the loop will start/continue
    y = $("#ycoord").val();
    x = $("#xcoord").val();

    if (playerTwoBoard[y][x] !== "A") { //if the player guesses incorrectly, they try again
        console.log("You missed! Wait for your next turn player one")
    } else if (playerTwoBoard[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship player one!");
        shipsA--;
        if (shipsA == 0) {
            break;
        }
        console.log(`There are ${shipsA} ships remaining for player one!`);

    }
    y = prompt("Player 2:Enter your y coordinate (0-4)");
    x = prompt("Player 2:Enter your x coordinate (0-4)");
    if (playerOneBoard[y][x] !== "A") { //if the player guesses incorrectly, they try again
        console.log("You missed! Wait for your next turn player two")
    } else if (playerOneBoard[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship player two!");
        shipsB--;
        if (shipsB == 0) {
            break;
        }
        console.log(`There are ${shipsB} ships remaining for player two!`);
    }
}


//when there are 0 ships remaining, the loop breaks and prints the following message
if (shipsA == 0) {
    console.log("Congratulations Player one! You won! All ships are sunk!!");
} else if (shipsB == 0) {
    console.log("Congratulations Player two! You won! All ships are sunk!!");
}

